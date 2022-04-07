import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Health Insurance",
      amount: 110.5,
      date: new Date(2022, 2, 15),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 110.5,
      date: new Date(2022, 2, 15),
    },
    {
      id: "e3",
      title: "Education Insurance",
      amount: 110.5,
      date: new Date(2022, 2, 15),
    },
  ];

  const addExpenseHandler = (expense) => {

  };

  return (
    <div>
      <NewExpense onaAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
