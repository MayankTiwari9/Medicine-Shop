import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import ListProvider from "./Store/ListProvider";
import Header from "./Components/UI/Header";
import TshirtForm from "./Components/MedicineForm/MedicineForm";
import TshirtList from "./Components/MedicineList/MedicineList";
function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <ListProvider>
      <CartProvider>
        {cartOpen && <Cart setCartOpen={setCartOpen} />}
        <Header setCartOpen={setCartOpen} />
        <TshirtForm />
        <TshirtList />
      </CartProvider>
    </ListProvider>
  );
}

export default App;
