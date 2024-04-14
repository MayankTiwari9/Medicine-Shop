import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import Modal from "../UI/Modal";
import "./Cart.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const onCartHandler = () => {
    props.setCartOpen(false);
  };

  const onPlcaeOrderHandler = () => {
    cartCtx.placeItem();
  };

  const consolidatedItems = cartCtx.items.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item };
    } else {
      acc[item.id].quantity += item.quantity;
    }
    return acc;
  }, {});

  const cartItemDetails = Object.values(consolidatedItems).map((item) => (
    <div key={item.id}>
      <h1>{item.name}</h1>
      <p>Quantity: {item.quantity}</p>
      <p>Price Per Item: {item.price}</p>
    </div>
  ));

  return (
    <Modal>
      <div className="cart-items">
        {cartItemDetails}
        <h3>Total: {cartCtx.totalAmount}</h3>
        <button onClick={onCartHandler}>Close </button>
        <button onClick={onPlcaeOrderHandler}>Place Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
