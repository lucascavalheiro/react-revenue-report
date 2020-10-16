export const formatToUSD = (value) => {
  if (value === null || value === undefined) return '';

  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
