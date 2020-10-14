import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useFetch from '../../../utils/use-fetch';
import {
  onRevenueFetchSuccess,
  onRevenueFetchFailure,
  onRevenueFetchRequest,
  onRevenueRestore,
} from '../store/revenue.store';

const useFetchRevenue = () => {
  const dispatch = useDispatch();
  const [requestData, response, error] = useFetch();
  const [date, setDate] = useState(null);

  useEffect(() => {
    if (!date) {
      dispatch(onRevenueRestore());
      return;
    }

    requestData(date);
    dispatch(onRevenueFetchRequest());
  }, [date]);

  useEffect(() => {
    if (response && !error) {
      dispatch(onRevenueFetchSuccess(response));
      return;
    }

    if (!response && error) {
      dispatch(onRevenueFetchFailure(error));
      return;
    }
  }, [response, error]);

  return [setDate];
};

export default useFetchRevenue;
