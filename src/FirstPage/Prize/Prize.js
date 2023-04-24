import classes from "./Prize.module.css";

const Prize = (props) => {
  return (
    <div className={classes.background}>
      <div className={classes.light}></div>
      <img src={props.image} />
      <p>{props.text}</p>
    </div>
  );
};

export default Prize;
