import "./Card.css";
const Cards = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default Cards;
