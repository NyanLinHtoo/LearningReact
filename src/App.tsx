import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, SetUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => SetUsers(res.data))
      .catch((err) => setErrors(err.message));
  }, []);

  return (
    <>
      {errors && <p className="text-red-600 font-medium">{errors}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
