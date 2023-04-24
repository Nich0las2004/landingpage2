import { useState } from "react";

import classes from "./Button.module.css";

const Button = (props) => {

  return (
    <button
      type="button"
      className={props.id == "3" ? classes.clickedBtn : classes.btn}
    >
      <p className={classes.date}>{props.date}</p>
      <h4 className={classes.name}>{props.name}</h4>
    </button>
  );
};

export default Button;
