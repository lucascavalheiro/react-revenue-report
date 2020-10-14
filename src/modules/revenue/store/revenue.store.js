import { createSelector } from 'reselect';

export const revenueStoreName = 'revenue';

// ACTION TYPES
const GET_REVENUE = 'reminders/GET_REVENUE';

export const initialState = {};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVENUE:
      return state;

    default:
      return state;
  }
};

// SELECTORS
const selectProps = (_, props) => props;

const selectRevenueState = (state, props) => state[revenueStoreName];
