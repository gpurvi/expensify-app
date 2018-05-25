import React from 'react';
import ExpensList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpensList/>
    </div>
);

export default ExpenseDashboardPage;
