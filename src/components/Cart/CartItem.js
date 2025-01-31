import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartslice';

const CartItem = ({item}) => {
  const { title, quantity, total, price,id } = item;
  const dispatch=useDispatch()
  const removeItemHandler=()=>{
    dispatch(cartActions.removeItemFromCart(id))
  }
  const addItemHandler=()=>{
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total?total.toFixed(2):"0.00"}{' '}
          <span className={classes.itemprice}>(${price?price.toFixed(2):"0.00"}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
