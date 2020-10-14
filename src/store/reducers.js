import { combineReducers } from 'redux';

import {
  reducer as revenueStore,
  initialState as revenueInitialState,
} from '../modules/revenue/store/revenue.store';

const reducers = {
  revenue: revenueStore,
};

export const getReducers = () => {
  return combineReducers(reducers);
};

export const initialStates = {
  revenue: revenueInitialState,
};
