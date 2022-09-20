import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

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
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default ExpenseList;
