import classes from "./Question.module.css";

const Question = (props) => {
  return (
    <div className={classes.template}>
      <p>{props.text}</p>
      <p style={{color:"grey"}}>v</p>
    </div>
  );
};

export default Question;
