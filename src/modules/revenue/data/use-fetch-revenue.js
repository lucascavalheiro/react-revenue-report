import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getYear, getMonth, getDate } from 'date-fns';
import useFetch from '../../../utils/use-fetch';
import {
  onRevenueFetchSuccess,
  onRevenueFetchFailure,
  onRevenueFetchRequest,
  onRevenueRestore,
} from '../store/revenue.store';

const useFetchRevenue = () => {
  const dispatch = useDispatch();
  const [requestData, response, isFetching, error] = useFetch();
  const [date, setDate] = useState(null);

  useEffect(() => {
    if (!date) {
      dispatch(onRevenueRestore());
      return;
    }

    const dateObj = new Date(date);
    const url = `https://70443nq7lb.execute-api.us-west-2.amazonaws.com/dev/year/${getYear(
      dateObj
    )}/month/${getMonth(dateObj) + 1}/day/${getDate(dateObj)}/revenue`;

    dispatch(onRevenueFetchRequest());
    requestData(url);
  }, [date]);

  useEffect(() => {
    console.log({ response, error });
    if (response && !error) {
      dispatch(onRevenueFetchSuccess(response));
      return;
    }

    if (error) {
      dispatch(onRevenueFetchFailure(error));
      return;
    }
  }, [response, error]);

  return [setDate];
};

export default useFetchRevenue;
