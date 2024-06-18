import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import { AxiosError } from "./services/api-client";
import userServices, { User } from "./services/user-services";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  const originalUsers = [...users];

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await userServices.getAllUser();
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

    userServices.deleteUser(user.id).catch((err) => {
      setErrors(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Nyan Lin Htoo" };
    setUsers([newUser, ...users]);

    userServices
      .createUser(newUser)
      .then(({ data: savedData }) => setUsers([savedData, ...users]))
      .catch((err) => {
        setErrors(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const updatedUser = { id: 0, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userServices.updateUser(updatedUser).catch((err) => {
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
        className="inline-block px-2.5 py-2 rounded-md my-1 bg-blue-500 hover:bg-blue-700 text-white"
        onClick={() => addUser()}>
        Add
      </button>
      <ul className="list-inside">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-disc flex items-center justify-between px-3 py-1 border rounded-md">
            {user.name}
            <div>
              <button
                className="inline-block px-2.5 py-2 rounded-md border border-gray-600  text-black mx-1"
                onClick={() => updateUser(user)}>
                Update
              </button>
              <button
                className="inline-block px-2.5 py-2 rounded-md  bg-rose-500 hover:bg-rose-700 text-white mx-1"
                onClick={() => deleteUser(user)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
