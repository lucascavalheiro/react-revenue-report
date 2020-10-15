import { initialState, revenueStoreName } from '../../store/revenue.store';

export const createRevenueStore = (revenue) => {
  return {
    [revenueStoreName]: {
      ...initialState,
      data: revenue,
    },
  };
};
