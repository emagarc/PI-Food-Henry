const { Router } = require("express");
const { Recipe, Type } = require("../db");
const { allRecipes } = require("../controllers/getApi");
const router = Router();

router.get("/", async (req, res) => {
  const data = await allRecipes();
  const { name } = req.query;
  if (name) {
    const nameRecipe = data.filter((r) =>
      r.name.toLowerCase().includes(name.toLowerCase())
    );
    nameRecipe.length
      ? res.status(200).send(nameRecipe)
      : res.status(400).json({ error: "Recipe has not exist" });
  } else {
    res.status(200).send(data);
  }
});

router.get("/:idRecipe", async (req, res) => {
  const data = await allRecipes();
  const { idRecipe } = req.params;
  if (idRecipe) {
    const idRecipeMatch = data.filter((r) => r.id === parseInt(idRecipe));
    if (idRecipeMatch) {
      res.status(200).send(idRecipeMatch);
    }
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, summary, healthScore, steps, dietId, dietTypes } = req.body;
    if (name && summary) {
      const newRecipe = await Recipe.create({
        name,
        summary,
        healthScore,
        steps,
        dietTypes,
        dietId,
      });
      const dietType = await Type.create({ diet: dietTypes, dietId });
      newRecipe.addType(dietType);
      res.status(200).send(newRecipe);
    }
  } catch (error) {
    res.status(400).send({ error: "Some fields are missing" });
  }
});

// Configurar los routers
// Ejemplo: router.use('/auth
module.exports = router;
