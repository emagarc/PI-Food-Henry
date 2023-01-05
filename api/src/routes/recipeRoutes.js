const { Router } = require('express');
const axios  = require('axios');
const { API_KEY } = process.env;
const { Recipe, Type } = require('../db');
const { allRecipes } = require('../controllers/getApi');
//const apiKey = process.env.YOUR_API_KEY;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/', async (req, res) => {
    const data = await allRecipes();
    const { name } = req.query;
    if(name) {
        const nameRecipe = data.filter(r => r.name.toLowerCase().includes(name.toLowerCase()));
        nameRecipe.length ?
        res.status(200).send(nameRecipe) :
        res.status(400).json({ error: 'Recipe has not exist' })
    } else {
        res.status(200).send(data);
    };
});


router.get('/:idRecipe', async (req, res) => {
    const data = await allRecipes();
    const { idRecipe } = req.params;
    if(idRecipe) {
        const idRecipeMatch = data.filter(r => r.id === parseInt(idRecipe));
        if (idRecipeMatch) {
            res.status(200).send(idRecipeMatch);
        }
    };
});


router.post('/', async (req, res) => {
    try{
        const { name, summary, healthScore, steps, dietId, diet } = req.body;
        if ( name && summary ) { 
        const newRecipe = await Recipe.create({ name, summary, healthScore, steps, diet, dietId });
        const dietType = await Type.create({ diet: diet, dietId });
        newRecipe.addType(dietType);
        res.status(200).send(newRecipe);
        };
    }catch(error) {
        res.status(400).send({ error: 'All fields need to be completed'} );
    }
});





// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;