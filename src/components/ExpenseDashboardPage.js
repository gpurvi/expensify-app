import React from 'react';
import ExpensList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from "./ExpensesSummary";

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary/>
        <ExpenseListFilters/>
        <ExpensList/>
    </div>
);

export default ExpenseDashboardPage;
