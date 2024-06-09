interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  console.log(totalAmount);

  return (
    <div className="max-w-lg p-6">
      <div className="relative overflow-x-auto sm:rounded-lg pt-7">
        <table className="w-full">
          <thead className="text-xs  uppercase   border border-slate-600">
            <tr>
              <th scope="col" className="px-5 py-3 border border-slate-600">
                Description
              </th>
              <th scope="col" className="px-5 py-3 border border-slate-600">
                Amount
              </th>
              <th scope="col" className="px-5 py-3 border border-slate-600">
                Category
              </th>

              <th
                scope="col"
                className="px-5 py-3 border border-slate-600"></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <th
                  scope="row"
                  className="px-6 font-medium  whitespace-nowrap border border-slate-600">
                  {expense.description}
                </th>
                <td className="px-5 border border-slate-600">
                  {expense.amount}
                </td>
                <td className="px-5 border border-slate-600">
                  {expense.category}
                </td>
                <td className="border border-slate-600">
                  <button
                    onClick={() => onDelete(expense.id)}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm px-5  py-2.5 me-2 m-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="px-5 border border-slate-600">Total</td>
              <td className="px-5 border border-slate-600">{totalAmount}</td>
              <td className="px-5 border border-slate-600"></td>
              <td className="px-5 border border-slate-600"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
