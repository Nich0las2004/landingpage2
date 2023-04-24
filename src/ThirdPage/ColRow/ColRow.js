import classes from "./ColRow.module.css";

const ColRow = (props) => {
  return (
    <div className={classes.template}>
      <img src={props.image} />
      <p>{props.text}</p>
    </div>
  );
};

export default ColRow;
