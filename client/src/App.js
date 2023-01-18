import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing.jsx";
import MainPage from "./Components/MainPage/MainPage.jsx";
import RecipeId from "./Components/Recipes/RecipeId.jsx";
import Form from "./Components/CreateRecipe/Form";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/recipes" component={MainPage} />
      <Route exact path="/recipes/:id" component={RecipeId} />
      <Route exact path="/createrecipe" component={Form} />
    </div>
  );
}

export default App;
