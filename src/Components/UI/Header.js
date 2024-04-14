import React, { useContext } from "react";
import "./Header.css";
import CartContext from "../../Store/cart-context";

const Header = (props) => {
  
  const cartCtx = useContext(CartContext);

  const oncCartOpenHandler = () => {
    props.setCartOpen(true);
  };

  return (
    <>
      <div className="header">
        <h1>Medicine Shop</h1>
        <button onClick={oncCartOpenHandler}>Cart {cartCtx.items.length}</button>
      </div>
    </>
  );
};

export default Header;
