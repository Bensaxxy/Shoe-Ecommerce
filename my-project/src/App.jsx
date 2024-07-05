import React, { useState } from "react";
import Header from "./components/pages/Header/Header";
import HeroSection from "./components/pages/Home/HeroSection";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header cartItems={cartItems} removeFromCart={removeFromCart} />
      <HeroSection addToCart={addToCart} />
    </div>
  );
};

export default App;
