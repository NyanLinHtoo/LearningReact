import { useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [category, setCategory] = useState("");

  return (
    <div className="max-w-md mx-auto p-3">
      <select
        className="border border-black "
        onChange={(event) => {
          console.log(event.target.value);
          setCategory(event.target.value);
        }}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="HouseHold">HouseHold</option>
      </select>
      <ProductList category={category} />
    </div>
  );
};

export default App;
