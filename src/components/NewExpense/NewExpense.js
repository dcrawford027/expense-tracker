import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [formOpen, setFormOpen] = useState(false);

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        
        props.onAddExpense(expenseData);
        closeFormHandler();
    }

    const openFormHandler = () => {
        setFormOpen(true);
    }

    const closeFormHandler = () => {
        setFormOpen(false);
    }

    return (
        <div className='new-expense'>
            {
                !formOpen && 
                <button onClick={openFormHandler}>Add New Expense</button>
            }
            {
                formOpen &&
                <ExpenseForm 
                    onSaveExpenseData={saveExpenseDataHandler} 
                    onFormClose={closeFormHandler}
                />
            }
        </div>
    );
}

export default NewExpense;