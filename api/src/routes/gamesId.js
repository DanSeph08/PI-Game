require('dotenv').config();
const { Router } = require('express');
const { UUID } = require('sequelize');
const router = Router();
const { getApiDetail } = require('../controlers/GamesId');
const { getDbDetail } = require('../controlers/GamesId');

router.get('/games/:id', async (req, res) => {
    const { id } = req.params;
    try {
        if (id == UUID || id.includes(UUID)) {
            let dbDetail = await getDbDetail(id);
            return res.status(200).send(dbDetail);
        }
        else {
            let apiDetail = await getApiDetail(id);
            return res.status(200).send(apiDetail);
        }
    } catch (error) {
        // res.status(404).send('Not found game');
        res.status(404).send({ error: error.message });
    }
}); 

module.exports = router;
