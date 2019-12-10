import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

//Contexts
import ProductContext from "./contexts/ProductContext";
import CartContext from './contexts/CartContext';

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item]);
  };

  const removeItem = id => {
	  
	for(let i=0; i< cart.length; i++){
		if(cart[i].id === id){
			let newCart = cart;
			newCart.splice(i,1);
			setCart(newCart);
		}
	}
	console.log(cart);
  }

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
		  <CartContext.Provider value={{cart, removeItem}}>
        <Navigation />

        {/* Routes */}
        <Route path="/cart" component={ShoppingCart} />
		</CartContext.Provider>

        <Route exact path="/" component={Products} />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
