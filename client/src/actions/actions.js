import axios from "axios";
import {
  GET_RECIPES,
  GET_DETAIL,
  GET_NAME,
  ORD_ALPHA,
  ORD_ALPHA_REV,
  ORD_DIET,
  ORD_HS,
  ORD_HS_REV,
} from "./actionNames";

export function getRecipes() {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3001/recipes/");
    dispatch({ type: GET_RECIPES, payload: res.data });
  };
}

export function getDetail(id) {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:3001/recipes/${id}`);
    dispatch({ type: GET_DETAIL, payload: res.data[0] });
  };
}

export function getName(name) {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/recipes?name=${name}`);
      dispatch({ type: GET_NAME, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function orderAlpha() {
  return {
    type: ORD_ALPHA,
  };
}

export function orderAlphaRev() {
  return {
    type: ORD_ALPHA_REV,
  };
}

export function orderDiet(diet) {
  return function (dispatch) {
    return fetch("http://localhost:3001/recipes")
      .then((res) => res.json())
      .then((data) =>
        data.filter((recipes) => recipes.dietTypes.includes(diet.toLowerCase()))
      )
      .then((res) =>
        dispatch({
          type: ORD_DIET,
          payload: res,
        })
      );
  };
}

export function orderHealthScore() {
  return {
    type: ORD_HS,
  };
}

export function orderHealthScoreRev() {
  return {
    type: ORD_HS_REV,
  };
}

export function createRecipe(recipe) {
  console.log("RECIPE: ", recipe);
  return async function () {
    try {
      console.log(recipe.dietTypes);
      const newRecipe = await axios.post(
        "http://localhost:3001/recipes",
        recipe
      );
      console.log(newRecipe);
    } catch (error) {
      console.log(error);
    }
  };
}
