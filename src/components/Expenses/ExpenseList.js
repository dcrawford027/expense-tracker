import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './ExpenseList.css';

const ExpenseList = props => {
    const { expenses } = props;
    const [selectedFilter, setSelectedFilter] = useState('2020');

    const filterChangeHandler = filterValue => {
      setSelectedFilter(filterValue);
    }

    return (
      <Card className='expenses'>
        <ExpensesFilter onFilterChange={filterChangeHandler} filterYear={selectedFilter}/>
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
      </Card>
    );
}

export default ExpenseList;