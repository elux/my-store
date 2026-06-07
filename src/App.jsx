import {HashRouter, Route, Routes} from "react-router-dom";
import { CartProvider  } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import './App.css';


function App() {

 

  return (
    <CartProvider>
          <HashRouter basename="/my-store">
          <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>     
        </HashRouter>  
    </CartProvider>         
  )
}

export default App
