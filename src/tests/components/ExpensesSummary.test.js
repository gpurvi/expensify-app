import React from 'react';
import {ExpensesSummary} from "../../components/ExpensesSummary";
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary correctly with no expenses', () => {
    const emptyExpenses = [];
    const wrapper = shallow(<ExpensesSummary expenses={emptyExpenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with 1 expense', () => {
    const oneExpense = [expenses[0]];
    const wrapper = shallow(<ExpensesSummary expenses={oneExpense}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with 3 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});