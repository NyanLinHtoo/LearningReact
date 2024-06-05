import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Yangon", "Mandalay", "Myanmar", "Bangkok"];

  return (
    <div className="pl-5">
      <Message></Message>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
