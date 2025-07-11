import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/view/HomePage'
import Cart from './components/Cart'
import Footer from "./components/footer/footer";


const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App