const { Router } = require('express');
const { AllGames } = require('../controlers/AllGames');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const { search } = req.query;
        const allGames = await AllGames();

        if (search) {
            let nameGame = allGames.filter(resp => resp.name.toLowerCase().includes(search.toLowerCase()));
            if (nameGame.length) return res.status(200).send(nameGame)
            else{ res.status(404).send('There are no games with this name')}
        }
        else {
            res.status(200).send(allGames);
        }
        
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = router;