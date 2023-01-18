import React, { useState } from "react";
import { createRecipe } from "../../actions/actions";
import { useDispatch } from "react-redux";
import style from "./form.module.css";
import { Link } from "react-router-dom";

const RecipeForm = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    summary: "",
    healthScore: "",
    steps: "",
    dietTypes: "",
  });

  const [validations, setValidations] = useState({
    name: "",
    summary: "",
    healthScore: "",
    steps: "",
    dietTypes: "",
  });

  const validateAll = () => {
    const { name, summary, healthScore, steps, dietTypes } = values;
    const validations = {
      name: "",
      summary: "",
      healthScore: "",
      steps: "",
      dietTypes: "",
    };
    let isValid = true;

    if (!name) {
      validations.name = "Name is required";
      isValid = false;
    }

    if ((name && name.length < 3) || name.length > 50) {
      validations.name = "Name must contain between 3 and 50 characters";
      isValid = false;
    }

    if (!summary) {
      validations.summary = "A summary of the dish is required";
      isValid = false;
    }

    if (!healthScore) {
      validations.healthScore = "A health score is required";
      isValid = false;
    }

    if (
      isNaN(healthScore) === true ||
      (healthScore < 10 && healthScore > 100)
    ) {
      validations.healthScore =
        "The health score must be a number betweeen 10 and 100";
      isValid = false;
    }

    if (!steps) {
      validations.steps = "Steps are required";
      isValid = false;
    }

    if (!dietTypes) {
      validations.dietTypes = "A diet type is required";
      isValid = false;
    }

    if (!isValid) {
      setValidations(validations);
    }

    return isValid;
  };

  const validateOne = (e) => {
    const { name } = e.target;
    const value = values[name];
    let message = "";

    if (!value) {
      message = `${name} is required`;
    }

    if (value && name === "name" && (value.length < 3 || value.length > 50)) {
      message = "Name must contain between 3 and 50 characters";
    }

    setValidations({ ...validations, [name]: message });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateAll();

    if (!isValid) {
      return false;
    }
    if (values.dietTypes) {
      values.dietTypes = [values.dietTypes];
    }
    dispatch(createRecipe(values)).then(() => alert("Recipe added"));
  };

  const { name, summary, healthScore, steps, dietTypes } = values;

  const {
    name: nameVal,
    summary: sumVal,
    healthScore: healthScoreVal,
    steps: stepsVal,
    dietTypes: dietTypesVal,
  } = validations;

  return (
    <div>
      <div>
        <h1 className={style.titleH1}>CREATE AND SUBMIT YOUR RECIPE</h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <div>
            <label className={style.labelStyles}>
              <p>Recipe name:</p>
              <input
                className={style.inputField}
                type="text"
                autoComplete="off"
                placeholder="Name your recipe"
                name="name"
                value={name}
                onChange={handleChange}
                onBlur={validateOne}
              />
            </label>
            <div className={style.validations}>{nameVal}</div>
          </div>

          <div>
            <label className={style.labelStyles}>
              <p>Summary:</p>
              <textarea
                className={`${style.inputField} ${style.textAreaAndSteps}`}
                type="text"
                autoComplete="off"
                placeholder="Your recipe in a couple of words"
                name="summary"
                value={summary}
                onChange={handleChange}
                onBlur={validateOne}
              />
            </label>
            <div className={style.validations}>{sumVal}</div>
          </div>

          <div>
            <label className={style.labelStyles}>
              <p>Health Score:</p>
              <input
                className={style.inputField}
                type="number"
                autoComplete="off"
                placeholder="From 10 to 100"
                name="healthScore"
                value={healthScore}
                onChange={handleChange}
                onBlur={validateOne}
              />
            </label>
            <div className={style.validations}>{healthScoreVal}</div>
          </div>
          <div>
            <label className={style.labelStyles}>
              <p>Steps:</p>
              <textarea
                className={`${style.inputField} ${style.textAreaAndSteps}`}
                type="text"
                autoComplete="off"
                placeholder="The recipe step by step"
                name="steps"
                value={steps}
                onChange={handleChange}
                onBlur={validateOne}
              />
            </label>
            <div className={style.validations}>{stepsVal}</div>
          </div>
          <div>
            <label className={style.labelStyles}>
              <p>Diet Type:</p>
              <select
                className={style.inputField}
                name="dietTypes"
                value={dietTypes}
                id="dietTypes"
                onChange={handleChange}
                onBlur={validateOne}
              >
                <option value="gluten free">Gluten Free</option>
                <option value="ketogenic">Ketogenic</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="lacto vegetarian">Lacto-Vegetarian</option>
                <option value="ovo vegetarian">Ovo-Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="pescatarian">Pescatarian</option>
                <option value="paleo">Paleo</option>
                <option value="primal">Primal</option>
                <option value="low foodmap">Low FODMAP</option>
                <option value="whole30">Whole30</option>
              </select>
            </label>
            <div className={style.validations}>{dietTypesVal}</div>
          </div>
          <p>
            <button
              className={style.buttonSubmit}
              type="submit"
              value="SUBMIT RECIPE"
            >
              SUBMIT RECIPE
            </button>
          </p>
        </form>
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
    </div>
  );
};

export default RecipeForm;
