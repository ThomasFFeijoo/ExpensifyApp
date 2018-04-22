import { createStore, combineReducers } from 'redux';

// Expenses Reducer

const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Filters Reducers

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducers = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
};

// Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducers
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'aaaa',
        description: 'January rent',
        note: 'this was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};