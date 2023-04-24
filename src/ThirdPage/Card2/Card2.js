import classes from "./Card2.module.css";

const Card2 = (props) => {
  return (
    <div className={classes.template}>
      <div className={classes.text}>
        <h4>{props.name}</h4>
        <p>{props.prize}</p>
        {props.prize2 !== "" && <p2>{props.prize2}</p2>}
        <p>{props.text}</p>
      </div>
      <img src={props.image} />
    </div>
  );
};

export default Card2;
