import { format } from 'date-fns';

export const extractSerieData = (validations = []) => {
  const dateHash = validations.reduce((prev, curr) => {
    const { amount, createdAt, offer, total } = curr;

    if (!offer) return prev;

    const gross = Math.round(amount * offer.unitCost * 100) / 100;
    const net = Math.round((gross - total) * 100) / 100;

    const key = format(new Date(createdAt), 'HH a').toLowerCase();
    if (prev[key]) {
      prev[key] = Math.round((prev[key] + net) * 100) / 100;
    } else {
      prev[key] = net;
    }

    return prev;
  }, {});

  return Object.keys(dateHash)
    .map((key) => ({ x: key, y: dateHash[key] }))
    .sort((a, b) => a.x.localeCompare(b.x, undefined, { numeric: true }));
};
