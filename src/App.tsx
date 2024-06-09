import { useState } from "react";
import ExpenseForm from "./components/Expense/ExpenseForm";
import ExpenseList from "./components/Expense/ExpenseList";
import ExpenseFilter from "./components/Expense/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Milk",
      amount: 5,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Eggs",
      amount: 10,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Electricity",
      amount: 100,
      category: "Utilities",
    },
    {
      id: 4,
      description: "Movies",
      amount: 15,
      category: "Entertainment",
    },
  ]);

  const visiableCategory = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const onDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([
            ...expenses,
            {
              ...expense,
              id: expenses.length + 1,
            },
          ])
        }
      />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList expenses={visiableCategory} onDelete={onDelete} />
    </div>
  );
}

export default App;
