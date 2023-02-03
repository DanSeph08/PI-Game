require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { VideoGame } = require('../db');
const { Genre } = require('../db');

const getGamesApi = async () => {
    try {
        let url = `https://api.rawg.io/api/games?key=${API_KEY}`;
        let videoGames = [];

        for (let i = 0; i <= 7; i++) {
            const apiAxios = await axios.get(url);
            const apiInfo = await apiAxios.data.results;
            for (let i = 0; i < apiInfo.length; i++) {
                const game = apiInfo[i];
                let { id, name, released, rating, background_image, genres, platforms } = game;
                genres = genres.map(genre => genre.name);
                platforms = platforms.map(platf => platf.name)
                videoGames.push({
                    id,
                    name,
                    released,
                    rating,
                    background_image,
                    genres,
                    platforms
                });
            }
            url = apiAxios.data.next
        }    
        return videoGames;
        
    } catch (error) {
        console.log(error);
    }
};

const getGamesBd = async () => {
    try {
        const bdInfo = await VideoGame.findAll({
            attributes: ['name', 'date', 'rating', 'imagen', 'genre', 'platf'],
            include: {
                model: Genre,
            }
        });

        return bdInfo;

    } catch (error) {
        console.log(error);
    }
};

const AllGames = async () => {
    const apiGame = await getGamesApi();
    const bdGame = await getGamesBd();
    const allGames = [...apiGame, ...bdGame];
    return allGames;
};

module.exports = { AllGames };

            // const apiAxios = await axios({
                //     method: 'get',
                //     url: `https://api.rawg.io/api/games?key=${API_KEY}&page_size=100`,
                //     headers: { 'Accept-Encoding': 'null' },
                // });