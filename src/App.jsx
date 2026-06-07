import {BrowserRouter, Route, Routes} from "react-router-dom";
import { CartProvider  } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import './App.css';


function App() {

 

  return (
    <CartProvider>
          <BrowserRouter basename="/my-store">
          <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>     
        </BrowserRouter>  
    </CartProvider>         
  )
}

export default App
