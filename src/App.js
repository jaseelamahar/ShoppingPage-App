import Cart from './components/Cart/Cart';
import Layout from './components/LayOut/LayOut';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function App() {
  const cart = useSelector((state) => state.cart);
  const [message, setMessage] = useState(null);

  // Notification Component
  const Notification = () => {
    if (!message) return null;

    // Set background color based on message content
    let backgroundColor = 'blue';  // Default to "Sending..."
    if (message.includes('successfully')) {
      backgroundColor = 'green'; // Success message
    } else if (message.includes('Error') || message.includes('failed')) {
      backgroundColor = 'red'; // Error message
    }

    return (
      <div
        style={{
          backgroundColor: backgroundColor,
          color: 'white',
          padding: '10px',
          textAlign: 'center',
          position: 'absolute',
          width: '100%',
          top: 0,
        }}
      >
        {message}
      </div>
    );
  };

  useEffect(() => {
    const fetchCart = async () => {
      setMessage("Sending..."); 
      console.log("sending")
      // Show "Sending..." message before the request

      try {
        const response = await fetch("https://shoppingpage-b0c72-default-rtdb.firebaseio.com/cart.json", {
          method: "PUT",
          body: JSON.stringify(cart),
        });

        if (response.ok) {
          setMessage("Cart data sent successfully!"); // Success message
        } else {
          setMessage("Error sending cart data!"); // Error message
        }
      } catch (error) {
        setMessage(error.message); // Error message
      }

      setTimeout(() => {
        setMessage(null); // Hide message after 3 seconds
      }, 10000);
    };

    fetchCart();
  }, [cart]);

  return (
    <Layout>
      <Notification />
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
