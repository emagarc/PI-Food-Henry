import React from "react";
import style from "./recipe.module.css";
import { Link } from "react-router-dom";

const Recipe = ({ id, image, name, dietTypes }) => {
  return (
    <div className={`${style.borderRecipe}`}>
      <Link className={style.text} to={`/recipes/${id}`}>
        <h2 className={style.text}>{name}</h2>
        <div className={style.imgContainer}>
          <img src={image} alt="no img" className={style.img} />
        </div>
        <h3 className={style.textTwo}>{dietTypes.join(", ")}</h3>
      </Link>
    </div>
  );
};

export default Recipe;
