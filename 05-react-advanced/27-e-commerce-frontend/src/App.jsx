import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from "./pages/ProductDetails"
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Cart from "./pages/Cart";


function App() {

  return (
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/cart" element={<Cart />} />

        </Routes>

      </BrowserRouter>

  )
}

export default App;