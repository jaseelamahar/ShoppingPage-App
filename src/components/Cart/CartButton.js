import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartslice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const cartQuantity=useSelector((state)=>state.cart.totalQuantity)

  const toggleCartHandler = () => {
    dispatch(cartActions.showCart({type:'showcart'}));
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
