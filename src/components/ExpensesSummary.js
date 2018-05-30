import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectTotalExpenses from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
    const length = props.expenses.length;
    const formatTotal = (selectTotalExpenses(props.expenses)/100).toFixed(2);
    const includeS = length <= 1 ? '' : 's';
    return (<h1>Viewing {length} expense{includeS} totalling ${formatTotal}</h1>);
};

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);

