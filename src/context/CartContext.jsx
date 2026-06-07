// Add this comment at the top of CartContext.jsx
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("Cart updated:", cart);
    }, [cart]);

    function addToCart(product) {
        const exists = cart.find(item => item.id === product.id);
        if (exists) {
            setCart(cart.map(item => item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }

    function removeFromCart(id) {
        setCart(cart.filter(item => item.id !== id));
    }

    function clearCart() {
        setCart([]);
    }


    //get Quantity
    function getQuantity(id) {
        const item = cart.find(item => item.id === id);
        return item ? item.quantity: 0;
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}   