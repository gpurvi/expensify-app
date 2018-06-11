import React from 'react'
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from "../actions/expenses";

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onClick = () => {
        this.props.startRemoveExpense(this.props.expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit expense</h1>
                    </div>
                </div>

                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onClick}>Remove expense</button>
                </div>
            </div>
        );
    }
}

const mapStateTopProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, updates) => dispatch(startEditExpense(id, updates)),
    startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense))
});

export default connect(mapStateTopProps, mapDispatchToProps)(EditExpensePage);