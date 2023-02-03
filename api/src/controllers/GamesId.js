require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { VideoGame, Genre } = require('../db');

const getApiDetail = async (id) => {
    const { data } = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);

    return {
        name: data.name,
        date: data.released,
        rating: data.rating,
        genres: data.genres.map((elem) => {
            return {
                genre: elem.name,
            };
        }),
        image: data.background_image,
        platforms: data.parent_platforms.map((elem) => {
            return {
                platform: elem.platform.name,
            };
        }),
        descr: data.description_raw,
    }
};

const getDbDetail = async (id) => {
    const idDb = await VideoGame.findOne({
        where: {
            id: id,
        },
        attributes: ["name", "descrip", "date", "imagen", "rating", "genre", "platf"],
    })
        return {
            name: idDb.name,
            descr: idDb.descrip,
            date: idDb.date,
            rating: idDb.rating,
            imagen: idDb.imagen,
            genres: idDb.genre,
            platforms: idDb.platf,
        };
};

module.exports = { getApiDetail, getDbDetail };