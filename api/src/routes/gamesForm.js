const { Router } = require('express');
const { VideoGame, Genre } = require('../db');
const router = Router();

router.post('/', async (req, res) => {
   try {
       const { name, descrip, date, rating, imagen, genre, platf } = req.body;
       const newGame = await VideoGame.create({ name, descrip, date, rating, imagen, genre, platf });

       if (newGame) {
           const dbGenre = await Genre.findAll({ where: { name: genre } });
           newGame.addGenre(dbGenre, {through: ''});
           return res.status(200).send('New game created successfully');
       }
       else{
           return res.status(404).send('Game not created');
       }
   } catch (error) {
        res.status(400).send({ error: error.message });
   } 
});

module.exports = router;
