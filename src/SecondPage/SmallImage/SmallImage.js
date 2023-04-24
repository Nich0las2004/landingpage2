import classes from "./SmallImage.module.css";

const SmallImage = (props) => {
  return
  <div className={classes.imageDiv}>
    <img src={props.imageSrc}/>
  </div>;
};

export default SmallImage;
