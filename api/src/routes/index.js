const { Router } = require('express');
const cors = require('cors');
const gamesList = require('./gamesList')
const gamesId = require('./gamesId')
const gamesForm = require('./gamesForm')
const gamesGenres = require('./gameGenres')
const platforms = require('./platforms')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use(cors());
router.use('/games', gamesList);
router.use('/', gamesId);
router.use('/game', gamesForm);
router.use('/genres', gamesGenres);
router.use('/platforms', platforms);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
