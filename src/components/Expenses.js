import './Expenses.css';
import ExpenseItem from './ExpenseItem';
function Expenses(props) {
const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date("2020, 7, 14"),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date("2021, 2, 28"),
    },
    {
      id: "e3",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date("2021, 5, 12"),
    },
    {
      id: "e4",
      title: "Rosh's Bday",
      amount: 690,
      date: new Date("2022, 12, 15"),
    },
  ];
  return (
    <div>
      <h1>Let's get started.</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}/>
      <ExpenseItem 
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}/>
      <ExpenseItem 
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}/>
    </div>
  );
}
export default Expenses;