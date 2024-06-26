import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  handleSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, handleSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No Item Found</p> : null}
      <ul className="list-inside list-disc">
        {items.map((item, index) => {
          return (
            <li
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                handleSelectedItem(item);
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
