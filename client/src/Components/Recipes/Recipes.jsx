import React, { useEffect, useState } from "react";
import Recipe from "./Recipe.jsx";
import { useSelector } from "react-redux";
import style from "./recipes.module.css";

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(0);
  console.log(recipes);

  const firstPage = () => {
    setCurrentPage(0);
  };

  let prevPage = () => {
    if (currentPage < 10) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage - 9);
    }
  };

  let nextPage = () => {
    if (recipes.length <= currentPage + 9) {
      setCurrentPage(currentPage);
    } else setCurrentPage(currentPage + 9);
  };

  const lastPage = () => {
    setCurrentPage(recipes.length - 9);
    console.log(currentPage);
  };

  useEffect(() => {
    firstPage();
  }, [recipes]);

  const filteredR = recipes.slice(currentPage, currentPage + 9);

  return (
    <div>
      <div className={style.directionComp}>
        {filteredR.map((r) => (
          <Recipe
            key={r.id}
            id={r.id}
            image={r.image}
            name={r.name}
            dietTypes={r.dietTypes}
          />
        ))}
      </div>
      <div className={style.downBarContainer}>
        <button onClick={firstPage} className={style.buttonLeft}>
          {" "}
          {"<<"}{" "}
        </button>
        <button onClick={prevPage} className={style.buttonLeft}>
          {" "}
          {"<"}{" "}
        </button>
        <button onClick={nextPage} className={style.buttonRight}>
          {" "}
          {">"}{" "}
        </button>
        <button onClick={lastPage} className={style.buttonRight}>
          {" "}
          {">>"}{" "}
        </button>
      </div>
    </div>
  );
};

export default Recipes;
//
