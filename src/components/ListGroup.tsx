function ListGroup() {
  const items = ["Yangon", "Mandalay", "Myanmar", "Bangkok"];

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 ? <p>No Item Found</p> : null}
      <ul className="list-inside list-disc">
        {items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default ListGroup;
