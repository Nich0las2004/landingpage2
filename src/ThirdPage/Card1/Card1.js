import classes from "./Card1.module.css";

const Card1 = (props) => {
  return (
    <div className={classes.template}>
      <div className={classes.text}>
        <h4>{props.name}</h4>
        <p>{props.prize}</p>
      </div>
      <img src={props.image} />
    </div>
  );
};

export default Card1;
