import { useState } from "react";

function ListGroup() {
  const items = ["Yangon", "Mandalay", "Myanmar", "Bangkok"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 ? <p>No Item Found</p> : null}
      <ul className="list-inside list-disc">
        {items.map((item, index) => {
          return (
            <li
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }}
              className={
                selectedIndex === index
                  ? " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  : "list-inside list-disc"
              }>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
