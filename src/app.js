import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRoutes';
import configureStore from './store/configureStore';
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({
    description: "Water bill",
    note: "this is my water bill",
    amount: 4500
}));

store.dispatch(addExpense({
    description: "Gas bill",
    amount: 4500,
    createdAt: 1000
}));
store.dispatch(addExpense({
    description: "rent",
    amount: 109555
}));

store.subscribe(() => {
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters));
});


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));