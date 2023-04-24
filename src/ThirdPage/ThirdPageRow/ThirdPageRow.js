import classes from "./ThirdPageRow.module.css";

const ThirdPageRow = (props) => {
  return (
    <div className={classes.template}>
      <div className={classes.position}>{props.position}</div>
      <div className={classes.text}>{props.text}</div>
    </div>
  );
};

export default ThirdPageRow;
