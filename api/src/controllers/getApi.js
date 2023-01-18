const { Router } = require("express");
const axios = require("axios");
const { API_KEY } = process.env;
const { Recipe } = require("../db");

const getApiRecipes = async () => {
  const fRecipes = [];
  const config = { headers: { "Accept-Encoding": null } };
  const result = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=99`,
    config
  );
  const finalResult = result.data.results;
  for (let i = 0; i < finalResult.length; i++) {
    const sRecipe = {};
    const allSteps = [];
    const steps = finalResult[i].analyzedInstructions;
    sRecipe.id = finalResult[i].id;
    sRecipe.image = finalResult[i].image;
    sRecipe.name = finalResult[i].title;
    sRecipe.dishTypes = finalResult[i].dishTypes;
    sRecipe.dietTypes = finalResult[i].diets;
    sRecipe.summary = finalResult[i].summary;
    sRecipe.healthScore = finalResult[i].healthScore;
    for (let j = 0; j < steps.length; j++) {
      const stp = steps[j].steps;
      for (let k = 0; k < stp.length; k++) {
        allSteps.push(stp[k].step);
      }
    }
    sRecipe.steps = allSteps;
    fRecipes.push(sRecipe);
  }
  return fRecipes;
};

const allRecipes = async () => {
  const apiRecipes = await getApiRecipes();
  const dbRecipes = await Recipe.findAll();
  const allToguether = [...apiRecipes, ...dbRecipes];
  return allToguether;
};

module.exports = { allRecipes, getApiRecipes };
