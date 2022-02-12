import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const cartShowHandler = () => {
    setCartVisible(true);
  }

  const cartHideHandler = () => {
    setCartVisible(false);
  }

  return (
    <CartProvider>
      {cartVisible && <Cart onClose={cartHideHandler}/>}
      <Header onShowCart={cartShowHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
