import { MouseEvent } from "react";

function ListGroup() {
  const items = ["Yangon", "Mandalay", "Myanmar", "Bangkok"];

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 ? <p>No Item Found</p> : null}
      <ul className="list-inside list-disc">
        {items.map((item) => {
          return (
            <li key={item} onClick={handleClick}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
