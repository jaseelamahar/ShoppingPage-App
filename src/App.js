import Cart from './components/Cart/Cart';
import Layout from './components/LayOut/LayOut';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Fragment } from 'react';
import Notification from "./components/Notification/Notification";
import {sendCartData} from "./components/store/cartslice"


let isInitial=true
function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if(isInitial){
      isInitial=false
      return
    }
    dispatch(sendCartData(cart))
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
