import { Factory } from 'fishery';
import faker from 'faker';
import { format } from 'date-fns';

export const factoryValidation = Factory.define(({ transientParams }) => {
  const {
    limit: transientLimit,
    unitCost: transientUnitCost,
    validation: transientValue,
  } = transientParams;

  const randomDate = new Date();
  const randomHour = faker.random.number({ min: 8, max: 19 });
  const randomMinutes = faker.random.number(59);
  const randomSeconds = faker.random.number(59);
  randomDate.setHours(randomHour, randomMinutes, randomSeconds);
  const createAt = format(randomDate, "yyyy-MM-dd'T'HH:mm:ssXXX");

  let value;
  if (transientValue) value = transientValue;
  else value = faker.random.float({ min: 0.1, max: 10.0, precision: 0.1 });

  let limit = transientLimit || 3;
  const amount = faker.random.number({ min: 1, max: limit });

  let unitCost;
  if (transientUnitCost) unitCost = transientUnitCost;
  else unitCost = faker.random.float({ min: 1, max: 10, precision: 0.1 });

  const total = Math.round(value * amount * 100) / 100;

  return {
    value,
    amount,
    total,
    offer: {
      unitCost,
    },
    createAt,
  };
});
