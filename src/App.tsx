import { FieldValues, useForm } from "react-hook-form";

function App() {
  interface formData {
    name: string;
    age: number;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form className="max-w-sm p-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="block mb-2 text-sm font-medium ">
          Your Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          type="name"
          id="name"
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
        />
        {errors.name?.type === "required" && (
          <span className="text-sm text-red-600">Name is required</span>
        )}
        {errors.name?.type === "minLength" && (
          <span className="text-sm text-red-600">
            Name Character must be over 3.
          </span>
        )}
      </div>
      <div className="mb-5">
        <label htmlFor="age" className="block mb-2 text-sm font-medium ">
          Your Age
        </label>
        <input
          {...register("age")}
          type="number"
          id="number"
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
        />
      </div>
      <button className="text-white rounded bg-blacktext-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5">
        Submit
      </button>
    </form>
  );
}

export default App;
