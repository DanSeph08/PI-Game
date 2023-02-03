require('dotenv').config();
const { Router } = require('express');
const { Genre } = require('../db');
const { API_KEY } = process.env;
const axios = require('axios');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const apiAxios = await axios({
            method: 'get',
            url: `https://api.rawg.io/api/genres?key=${API_KEY}`,
            headers: { 'Accept-Encoding': 'null' },
        });
    
          const apiGenres = apiAxios.data.results.map(unid => unid.name);
          const allGenres = apiGenres.forEach(elem => {
            Genre.findOrCreate({
                where:{
                    name: elem
                }
            })
          });
    
        const genres = await Genre.findAll();
        res.status(200).send(genres);
    
      } catch (error) {
          console.log(error);
      }  
});






module.exports = router;
