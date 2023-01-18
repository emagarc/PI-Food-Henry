import React from "react";
import { Link } from "react-router-dom";
import style from "./landing.module.css";

export function Landing() {
  return (
    <div className={style.holder}>
      <h1>DISCOVER A WORLD OF FLAVOURS</h1>
      <div>
        <button className={style.button}>
          <Link className={style.link} to="/recipes">
            ENTER
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Landing;
