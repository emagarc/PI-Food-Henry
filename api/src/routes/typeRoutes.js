const { Router } = require('express');
const axios  = require('axios');
const { Type } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/', async (req, res) => {
    try{
        const allDBTypes = await Type.findAll();
        const SpoonacularDiets = await Type.bulkCreate([
                {
                    "diet":"Gluten Free"
                },
                {
                    "diet":"Ketogenic"
                },
                {
                    "diet":"Vegetarian"
                },
                {
                    "diet":"Lacto-Vegetarian"
                },
                {
                    "diet":"Ovo-Vegetarian"
                },
                {
                    "diet":"Vegan"
                },
                {
                    "diet":"Pescetarian"
                },
                {
                    "diet":"Paleo"
                },
                {
                    "diet":"Primal"
                },
                {
                    "diet":"Low-FOODMAP"
                },
                {
                    "diet":"Whole30"
                }
            ]);
        if (allDBTypes.length > 0) {
            const allDietTypes = [...allDBTypes, ...SpoonacularDiets]
            return res.status(200).send(allDietTypes);
        } else {
            res.status(200).send(SpoonacularDiets);
        };
    }catch (error) {
        res.status(400).json({ error: 'Operation failed'});
    }
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;