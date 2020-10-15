import { Factory } from 'fishery';
import faker from 'faker';
import { factoryValidation } from './validation.factory';

export const factoryRevenue = Factory.define(() => {
  const limit = faker.random.number({ min: 1, max: 3 });
  const unitCost = faker.random.float({ min: 0.1, max: 10.0, precision: 0.1 });
  const validation = faker.random.float({
    min: 0.1,
    max: unitCost,
    precision: 0.1,
  });

  const validationListSize = faker.random.number({ min: 1, max: 100 });
  const validations = factoryValidation.buildList(
    validationListSize,
    {},
    {
      transient: {
        limit,
        unitCost,
        validation,
      },
    }
  );

  const totalAmount = validations.reduce((prev, curr) => prev + curr.amount, 0);
  const gross = Math.round(unitCost * totalAmount * 100) / 100;
  const spent = validations.reduce((prev, curr) => {
    return Math.round((prev + curr.total) * 100) / 100;
  }, 0.0);
  const net = Math.round((gross - spent) * 100) / 100;
  const item = faker.commerce.productName();

  return {
    net,
    gross,
    spent,
    validations,
    offer: {
      name: `$${validation.toFixed(2)} validation`,
      description: `${item} ($${unitCost.toFixed(2)})`,
      validation,
      item,
      unitCost,
      limit,
      category: faker.commerce.product(),
    },
  };
});
