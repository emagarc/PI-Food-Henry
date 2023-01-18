import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import style from "./searchBar.module.css";
import { getName } from "../../actions/actions";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const onClickHandler = () => {
    dispatch(getName(input));
  };

  return (
    <div className={style.inputsContainer}>
      <label>Search recipe:</label>
      <input
        className={style.inputText}
        type="text"
        placeholder="name"
        name="input"
        autoComplete="off"
        onChange={(e) => inputHandler(e)}
      />
      <div>
        <button className={style.srcBtn} onClick={() => onClickHandler()}>
          Search
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getName: (name) => dispatch(getName(name)),
  };
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
