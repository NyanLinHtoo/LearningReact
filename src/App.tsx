import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pizza",
    toppings: ["Muchroom"],
  });

  const handleClick = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Cheese"],
    });
  };

  return (
    <div className="p-8">
      <ul>
        {pizza.toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
      <br />
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;
