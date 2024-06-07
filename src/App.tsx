import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: "bug1",
      solved: false,
    },
    {
      id: 2,
      title: "bug2",
      solved: false,
    },
  ]);

  const handleClick = () => {
    setBugs(
      bugs.map((bug) => (bug.title === "bug1" ? { ...bug, solved: true } : bug))
    );
  };

  return (
    <div className="p-8">
      {bugs.map((bug) => (
        <div key={bug.id}>
          {bug.title} {bug.solved}
        </div>
      ))}
      <Like onClick={handleClick} />
    </div>
  );
}

export default App;
