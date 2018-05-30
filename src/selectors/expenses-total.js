export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((accumulator, currentVal) => accumulator + currentVal, 0);
};