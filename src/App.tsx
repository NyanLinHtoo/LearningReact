import { useState } from "react";
import NavBar from "./components/NavBar";
import CartItem from "./components/CartItem";

function App() {
  const [cartItem, setCartItem] = useState(["Item1", "Item2"]);

  return (
    <div className="p-8">
      <NavBar cartItemCount={cartItem.length} />
      <CartItem cartItem={cartItem} onClear={() => setCartItem([])} />
    </div>
  );
}

export default App;
