import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";




function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if( loading) return <p>Loading...</p>;
    if( error) return <p>Error: {error}</p>;
    
  return (
    <div className="product-grid"> 
        
        {products.map((product) => (
        <ProductCard
          key={product.id} 
          {...product}
        />
      ))}
    </div>
  );
}

export default Home;