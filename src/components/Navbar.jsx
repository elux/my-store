import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
function Navbar() {
  const { cart } = useCart();
  return (
    <nav>
      <span>My Store </span>
      <Link to="/cart">🛒 {cart.length}</Link>
    </nav>
  );
}

export default Navbar;