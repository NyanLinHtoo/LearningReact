import { useEffect, useState } from "react";
import userServices, { User } from "../services/user-services";
import { AxiosError } from "../services/api-client";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await userServices.getAll<User>();
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

  return { users, errors, isLoading, setUsers, setErrors };
};

export default useUsers;
