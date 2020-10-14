import { combineReducers } from 'redux';

import {
  revenueStoreName,
  reducer as revenueStore,
  initialState as revenueInitialState,
} from '../modules/revenue/store/revenue.store';

const reducers = {
  [revenueStoreName]: revenueStore,
};

export const getReducers = () => {
  return combineReducers(reducers);
};

export const initialStates = {
  [revenueStoreName]: revenueInitialState,
};
