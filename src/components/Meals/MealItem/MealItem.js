import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addItemHandler = (enteredAmount) => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: enteredAmount
    };
    ctx.addItem(item);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
