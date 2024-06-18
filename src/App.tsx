import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  const originalUsers = [...users];

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
        setErrors("");
        setLoading(false);
      } catch (err) {
        setErrors((err as AxiosError).message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const deleteUser = (user: User) => {
    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setErrors(err.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Nyan Lin Htoo" };
    setUsers([newUser, ...users]);

    axios
      .post("https://jsonplaceholder.typicode.com/users/", newUser)
      .then(({ data: savedData }) => setUsers([savedData, ...users]))
      .catch((err) => {
        setErrors(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-44">
      {errors && <p className="text-red-600 font-medium">{errors}</p>}
      {isLoading && (
        <div className="mx-auto pl-10">
          <Loader />
        </div>
      )}
      <button
        className="inline-block px-2.5 py-2 rounded-md  bg-blue-500 hover:bg-blue-700 text-white"
        onClick={() => addUser()}>
        Add
      </button>
      <ul className="list-inside">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-disc flex items-center justify-between px-3 py-1 border rounded-md">
            {user.name}
            <button
              className="inline-block px-2.5 py-2 rounded-md  bg-blue-500 hover:bg-blue-700 text-white"
              onClick={() => deleteUser(user)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
