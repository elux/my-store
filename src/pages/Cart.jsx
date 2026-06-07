import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";


function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  return (
     <>
        <h1>🛒 Your Cart ({cart.length})</h1>
        { cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} x{item.quantity} - ${(item.price * (item.quantity || 1)).toFixed(2)} <span style={{ color: 'red' }} onClick={() => removeFromCart(item.id)}>[Remove]</span>
              </li>
            ))
        }
          <li>Total: ${cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0).toFixed(2)}</li>
          <li onClick={clearCart} style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>[Clear Cart]</li>
        </ul>
 ) : <p>Your cart is empty. </p>
        }<p><Link to="/">Continue Shopping</Link></p>
        </>    
    ) 
      
}

export default Cart; 