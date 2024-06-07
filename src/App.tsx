import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    const newDrint = {
      title: "Americano",
      price: (drink.price += 1),
    };
    setDrink(newDrint);
  };
  return (
    <div className="p-8">
      {drink.title} {drink.price}
      <Like onClick={handleClick} />
    </div>
  );
}

export default App;
