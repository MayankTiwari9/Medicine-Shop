import React, { useContext } from "react";
import ListContext from "../../Store/list-context";
import CartContext from "../../Store/cart-context";
import "./MedicineList.css";

function MedicineList() {
  const listCtx = useContext(ListContext);
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (item) => {
    if (item.quantity > 0) {
      const cartItem = {
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        quantity: 1,
      };

      cartCtx.addItem(cartItem);
      listCtx.decreaseItemQuantity(item.id);
    } else {
      alert("Item Quantity is less than 0");
    }
  };

  return (
    <div className="list-container">
      {listCtx.items &&
        listCtx.items.map((item) => {
          return (
            <div className="list-main" key={item.id}>
              <div>
                <h1>{item.name}</h1>
                <h1>{item.description}</h1>
                <h1>{item.price}</h1>
                <h1>{item.quantity}</h1>
              </div>
              <div>
                <button onClick={() => addItemToCartHandler(item)}>
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MedicineList;
