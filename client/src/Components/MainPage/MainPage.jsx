import Recipes from "../Recipes/Recipes.jsx";
import { getRecipes } from "../../actions/actions.js";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Nav from "../Nav/Nav.jsx";

export function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <div>
        <Recipes />
      </div>
    </div>
  );
}

export default MainPage;
