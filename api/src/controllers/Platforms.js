require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;

const getAllPlat = async () => {
    let AllPlatforms = [];

    const apiAll = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
    const apiData = await apiAll.data.results;
    for (let i = 0; i < apiData.length; i++){
        const games = apiData[i];
        const { platforms } = games;
        for (let i = 0; i < platforms.length; i++){
            const platform = platforms[i].platform.name;
            if (AllPlatforms.indexOf(platform) === -1) AllPlatforms.push(platform);
        }
    }
    return AllPlatforms;
};

module.exports = { getAllPlat };