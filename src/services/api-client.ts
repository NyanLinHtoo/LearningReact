import axios, { AxiosError } from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // headers: {
  //     "api-key" : "..."
  // }
});

export { AxiosError };
