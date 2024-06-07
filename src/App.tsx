import { FormEvent, useRef } from "react";

function App() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = +ageRef.current.value;
    console.log(person);
  };

  return (
    <form className="max-w-sm p-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="block mb-2 text-sm font-medium ">
          Your Name
        </label>
        <input
          ref={nameRef}
          type="name"
          id="name"
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="age" className="block mb-2 text-sm font-medium ">
          Your Age
        </label>
        <input
          ref={ageRef}
          type="number"
          id="number"
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:text-white "
          required
        />
      </div>
      <button className="text-white rounded bg-blacktext-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5">
        Submit
      </button>
    </form>
  );
}

export default App;
