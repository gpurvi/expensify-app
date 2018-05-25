import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from "../../components/ExpenseListFilters";
import {filters, altfilters} from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt date correctly', () => {
    wrapper.setProps({
        filters: altfilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const event = {target: {value: 'baz'}};
    wrapper.find('input').simulate('change', event);
    expect(setTextFilter).toHaveBeenLastCalledWith(event.target.value);
});

test('should sort by date', () => {
    const event = {target: {value: 'date'}};
    wrapper.find('select').simulate('change', event);
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const event = {target: {value: 'amount'}};
    wrapper.find('select').simulate('change', event);
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(altfilters);
    expect(setStartDate).toHaveBeenLastCalledWith(altfilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altfilters.endDate);
});

test('should handle date focus changes', () => {
    const focused = 'startDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused);
    expect(wrapper.state('calendarFocused')).toBe(focused);
});
