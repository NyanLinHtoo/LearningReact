import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 1,
    item: [
      { id: 1, title: "Item1", quantity: 1 },
      { id: 2, title: "Item2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      item: cart.item.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };

  return (
    <div className="p-8">
      <ul>
        {cart.item.map((item) => (
          <li key={item.id}>{item.quantity}</li>
        ))}
      </ul>
      <br />
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;
