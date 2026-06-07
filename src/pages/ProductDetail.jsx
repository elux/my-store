import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
function ProductDetail(){
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();
    const { addToCart, getQuantity } = useCart();
    const quantityInCart = getQuantity(id);
    useEffect( () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false)
        })
    },[id]);

    if (loading) return <p>Loading.....</p>
    if (error) return <p>{ error }</p>

    return (
        <div style={{ maxWidth: '600px', margin: '32px auto', padding: '16px' }}>
            
            <img src={product.image} alt={product.title} style={{ width: '300px' }} />
            <h1 style={{ fontWeight: 'bold', fontSize: '24px' }}>{product.title}</h1>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>${product.price}</p>
            <p>{product.description}</p>
            
            <button onClick={() => {
                addToCart({ id: product.id, title: product.title, price: product.price });
            }}>
                Add to Cart ({ quantityInCart })
            </button>
        </div>
    );
}

export default ProductDetail;