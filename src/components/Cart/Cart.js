import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const showCart = useSelector((state) => state.cart.showCart);
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from state

  return (
    <div>
      {showCart && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {cartItems.map((item) => (
              <CartItem
              item={{
                id:item.id,
                title:item.title,
                description:item.description,
                quantity:item.quantity,
                totalPrice:item.totalPrice,
                price:item.price}}
                />
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
};

export default Cart;
