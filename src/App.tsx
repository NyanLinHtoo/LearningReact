import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Jhon",
    },
  });

  const handleClick = () => {
    setGame({
      ...game,
      player: {
        ...game.player,
        name: "Nyan Lin Htoo",
      },
    });
  };

  return (
    <div className="p-8">
      {game.player.name} <br />
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;
