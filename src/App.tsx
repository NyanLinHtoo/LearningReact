import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [tags, setTags] = useState(["happy", "sad"]);

  const handleClick = () => {
    // Add
    setTags([...tags, "warning"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  return (
    <div className="p-8">
      {tags}
      <Like onClick={handleClick} />
    </div>
  );
}

export default App;
