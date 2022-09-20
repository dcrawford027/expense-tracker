import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const { expenses } = props;
  const [selectedFilter, setSelectedFilter] = useState("2020");

  const filterChangeHandler = (filterValue) => {
    setSelectedFilter(filterValue);
  };

  const filteredExpenses = expenses.filter(
    expense => expense.date.getFullYear().toString() === selectedFilter
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        filterYear={selectedFilter}
      />
      {filteredExpenses.length === 0 && <p style={{'color': 'white'}}>No expenses found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
      ))}
    </Card>
  );
};

export default ExpenseList;
