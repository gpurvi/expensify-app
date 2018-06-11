import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectTotalExpenses from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
    const length = props.expenses.length;
    const formatTotal = (selectTotalExpenses(props.expenses) / 100).toFixed(2);
    const includeS = length <= 1 ? '' : 's';
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{length}</span> expense{includeS} totalling <span>${formatTotal}</span>
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);

