import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });
  const [person, setPerson] = useState({
    name: "John",
    age: 30,
    address: {
      street: "Main St",
      city: "New York",
    },
  });

  const handleClick = () => {
    const newDrint = {
      title: "Americano",
      price: (drink.price += 1),
    };
    setDrink(newDrint);

    const newData = {
      ...person,
      age: person.age + 1,
      address: {
        ...person.address,
        city: "Yangon",
      },
    };
    setPerson(newData);
  };
  return (
    <div className="p-8">
      {drink.title} {drink.price} <br />
      {person.name}
      {person.age} {person.address.city}
      <Like onClick={handleClick} />
    </div>
  );
}

export default App;
