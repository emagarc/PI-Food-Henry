import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../Nav/navBar.module.css";
import { connect, useDispatch } from "react-redux";
import SearchBar from "../Search/SearchBar.jsx";
import {
  getRecipes,
  orderAlpha,
  orderAlphaRev,
  orderDiet,
  orderHealthScore,
  orderHealthScoreRev,
} from "../../actions/actions";

const NavBar = ({
  orderAlpha,
  orderAlphaRev,
  orderHealthScore,
  orderHealthScoreRev,
}) => {
  const [sort, setOrder] = useState("");
  const [diet, setDiet] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (sort === "all") dispatch(getRecipes());
    else if (sort === "a-z") orderAlpha();
    else if (sort === "z-a") orderAlphaRev();
    else if (sort === "↑ healthscore") orderHealthScore();
    else if (sort === "↓ healthscore") orderHealthScoreRev();
    else if (diet !== "") dispatch(orderDiet(diet));
    else if (diet === "") dispatch(getRecipes());
  }, [
    sort,
    orderAlpha,
    orderAlphaRev,
    orderHealthScore,
    orderHealthScoreRev,
    diet,
    dispatch,
  ]);

  return (
    <div className={style.navBarContainer}>
      <Link to="/" className={style.linkBackAndCreate}>
        <p>«Back</p>
      </Link>
      <div>
        <SearchBar />
      </div>
      <div className={style.filtersContainer}>
        <p>Search by Diet Type</p>
        <div className={style.selectContainer}>
          <select
            onChange={(event) => setDiet(event.target.value)}
            className={style.typeDiet}
          >
            <option value="">-</option>
            <option value="gluten free">Gluten Free</option>
            <option value="ketogenic">Ketogenic</option>
            <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="paleolithic">Paleolithic</option>
            <option value="primal">Primal</option>
            <option value="foodmap friendly">Low-FOODMAP</option>
            <option value="whole 30">Whole 30</option>
            <option value="dairy free">Dairy Free</option>
          </select>
        </div>
      </div>
      <div className={style.filtersContainer}>
        <p>Sort by</p>
        <div className={style.selectContainer}>
          <select
            onChange={(event) => setOrder(event.target.value)}
            className={style.typeDiet}
          >
            <option value="all">-</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="↑ healthscore">↑ Health score</option>
            <option value="↓ healthscore">↓ Health score</option>
          </select>
        </div>
      </div>
      <button className={style.createButton}>
        <Link to="/createrecipe" className={style.linkBackAndCreate}>
          <p className={style.textCreate}>CREATE YOUR RECIPE</p>
        </Link>
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderAlpha: () => dispatch(orderAlpha()),
    getRecipes: () => dispatch(getRecipes()),
    orderDiet: (diet) => dispatch(orderDiet(diet)),
    orderAlphaRev: () => dispatch(orderAlphaRev()),
    orderHealthScore: () => dispatch(orderHealthScore()),
    orderHealthScoreRev: () => dispatch(orderHealthScoreRev()),
  };
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
//.
