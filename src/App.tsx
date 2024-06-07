import Expandable from "./components/Expandable";

function App() {
  return (
    <div className="p-8">
      <Expandable maxChars={20}>Hello World</Expandable>
    </div>
  );
}

export default App;
