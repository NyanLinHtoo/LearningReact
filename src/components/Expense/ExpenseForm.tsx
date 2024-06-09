import { useForm } from "react-hook-form";
import { categories } from "../categories";

interface formData {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  onSubmit: (data: formData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>();

  return (
    <form
      className="max-w-lg p-6"
      onSubmit={handleSubmit((data) => {
        const processedData = { ...data, amount: Number(data.amount) };

        onSubmit(processedData);
        reset();
      })}>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium ">
          Description
        </label>
        <input
          {...register("description", { required: true, minLength: 3 })}
          type="description"
          id="description"
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
        {errors.description?.type === "required" && (
          <p className="text-red-500 text-sm">Description is required!</p>
        )}
        {errors.description?.type === "minLength" && (
          <p className="text-red-500 text-sm">
            Description should be at least 3 characters!
          </p>
        )}
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium ">Amount</label>
        <input
          {...register("amount", { required: true })}
          type="number"
          id="amount"
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
        {errors.amount?.type === "required" && (
          <p className="text-red-500 text-sm">Amount is required!</p>
        )}
      </div>
      <label htmlFor="category" className="block mb-2 text-sm font-medium">
        Category
      </label>
      <select
        {...register("category", { required: true })}
        id="category"
        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
        <option value="">-</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {errors.category && (
        <p className="text-red-500 text-sm">Category is required!</p>
      )}
      <button className="text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   mt-7">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
