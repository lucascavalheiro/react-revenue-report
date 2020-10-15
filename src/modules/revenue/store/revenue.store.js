import { createSelector } from 'reselect';

export const revenueStoreName = 'revenue';

// ACTION TYPES
const SUCCESS = 'revenue/SUCCESS';
const FAILURE = 'revenue/FAILURE';
const REQUEST = 'revenue/REQUEST';
const RESTORE = 'revenue/RESTORE';

// REDUCER
export const initialState = {
  data: null,
  error: null,
  isFetching: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      const { data } = action.payload;
      return { ...state, data, error: null, isFetching: false };

    case FAILURE:
      const { error } = action.payload;
      return { ...state, data: null, error, isFetching: false };

    case REQUEST:
      return { ...state, data: null, error: null, isFetching: true };

    case RESTORE:
      return { ...state, initialState };

    default:
      return state;
  }
};

// ACTION CREATORS
export const onRevenueFetchSuccess = (data) => ({
  type: SUCCESS,
  payload: { data },
});

export const onRevenueFetchFailure = (error) => ({
  type: FAILURE,
  payload: { error },
});

export const onRevenueFetchRequest = () => ({
  type: REQUEST,
});

export const onRevenueRestore = () => ({
  type: RESTORE,
});

// SELECTORS
export const selectRevenueStore = (state) => state[revenueStoreName];

export const selectReveneu = createSelector(selectRevenueStore, (store) => {
  if (!store?.data) return null;

  return store.data.revenue;
});

export const selectOfferName = createSelector(selectReveneu, (revenue) => {
  if (!revenue?.offer) return null;

  return revenue.offer.name;
});

export const selectOfferDescription = createSelector(
  selectReveneu,
  (revenue) => {
    if (!revenue?.offer) return null;

    return revenue.offer.description;
  }
);
