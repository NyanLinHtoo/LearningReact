import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, SetUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        SetUsers(res.data);
        setErrors("");
        setLoading(false);
      } catch (err) {
        setErrors((err as AxiosError).message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-44">
      {errors && <p className="text-red-600 font-medium">{errors}</p>}
      {isLoading && (
        <div className="mx-auto pl-10">
          <Loader />
        </div>
      )}
      <ul className="list-inside ">
        {users.map((user) => (
          <li key={user.id} className="list-disc">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
