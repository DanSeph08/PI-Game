const { Router } = require('express');
const router = Router();
const { getAllPlat } = require('../controlers/Platforms');

router.get('/', async (req, res) => {
   try {
       let platforms = await getAllPlat();
       platforms = platforms.map(plat => {
           return { name: plat };
       });
       res.status(200).send(platforms);
   } catch (error) {
        res.status(404).send('Platforms not found'); 
   } 
});

module.exports = router;