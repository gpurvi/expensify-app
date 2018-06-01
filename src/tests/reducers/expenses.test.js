import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default expenses state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should add an expense', () => {
    const expense = {
        description: 'Gum',
        note: '',
        amount: 100,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        expense
    ]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'tree',
            note: 'some note',
            createdAt: -100
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        {
            ...expenses[0],
            ...action.updates
        },
        expenses[1],
        expenses[2]
    ]);
});

test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'tree',
            note: 'some note',
            createdAt: -100
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses
    };
    const state = expensesReducer(undefined, action);
    expect(state).toEqual(expenses);
});