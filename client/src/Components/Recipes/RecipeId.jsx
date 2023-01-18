import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../../actions/actions";
import style from "./recipeId.module.css";

const RecipeId = () => {
  const recipeDetail = useSelector((state) => state.recipeDetail);
  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {
    dispatch(getDetail(id));
  }, [id, dispatch]);

  console.log(recipeDetail, "RECIPE DETAIL");

  return (
    <div>
      <div className={style.recipeIdContainer}>
        <h1 className={style.title}>{recipeDetail.name}</h1>
        <div>
          <img src={recipeDetail.image} alt="no img" />
        </div>
        <h4 className={style.title2}>Dish type: {recipeDetail.dishTypes}</h4>
        <h4 className={style.title2}>Diet type: {recipeDetail.dietTypes}</h4>
        <h4 className={style.title2}>
          Health score: {recipeDetail.healthScore}
        </h4>
        <h4 className={style.title2}>Summary: {recipeDetail.summary}</h4>
        <h4 className={style.title2}>Steps: {recipeDetail.steps}</h4>
      </div>
      <p> </p>
      <p> </p>
      <div>
        <button className={style.backButton}>
          <Link to="/recipes" className={style.link}>
            {"<<"}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default RecipeId;
