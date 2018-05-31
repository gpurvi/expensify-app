import {combineReducers, createStore, applyMiddleware} from "redux";
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


export default () => {
    return createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        composeWithDevTools(applyMiddleware(thunk))
    );
};