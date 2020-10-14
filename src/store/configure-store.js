import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reduxDevtools from 'redux-devtools-extension';
import * as reduxDevtoolsProduction from 'redux-devtools-extension/logOnlyInProduction';

import { getReducers, initialStates } from './reducers';

const dev = process.env.NODE_ENV !== 'production';
const { composeWithDevTools } = dev ? reduxDevtools : reduxDevtoolsProduction;

let store;

export const makeStore = (preloadedState = initialStates) => {
  const reducers = getReducers();

  if (dev) {
    const middlewares = [thunkMiddleware];
    store = createStore(
      reducers,
      preloadedState,
      composeWithDevTools(applyMiddleware(...middlewares))
    );
  } else {
    store = createStore(
      reducers,
      preloadedState,
      applyMiddleware(thunkMiddleware)
    );
  }
  return store;
};

export const getStore = () => {
  return store;
};
