import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({id, title, price, description, image }) {
  const { addToCart , getQuantity} = useCart();

  //derive the value of quantity in cart for this product
  const quantityInCart = getQuantity(id);

  return (
    <div className="product-card">
        <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <h2 style={{ fontWeight: 'bold' }}>{title}</h2>
            <img src={image} alt={title} style={{ width: '100%' }} />
         </Link>
      <p>${price}</p>
      <p>{description}</p>
      <button onClick={() => {
        addToCart({ id, title, price });
      }}>
        Add to Cart ({ quantityInCart })
      </button>
     
    </div>
  );
}

export default ProductCard;