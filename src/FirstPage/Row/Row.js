import classes from "./Row.module.css";

const Row = (props) => {
  return (
    <div className={classes.columnInfo}>
      <span className={classes.position}>{props.position}</span>
      <span className={classes.voucher}>{props.voucher}</span>
      <span className={classes.prize}>
        <img className={classes.plane} src={props.image !== ""  && props.image} />
        {props.prize}
      </span>
    </div>
  );
};

export default Row;
