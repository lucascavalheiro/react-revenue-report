const { createRevenueStore } = require('../fixtures/stores/store');
const { createRevenueStoreEmpty } = require('../fixtures/stores/empty-store');
const { selectOfferName, selectOfferDescription } = require('./revenue.store');
const { factoryRevenue } = require('../fixtures/factories/revenue.factory');

describe('Revenue / Store', () => {
  describe('selectOfferName', () => {
    it('returns null if the store is empty', () => {
      const store = createRevenueStoreEmpty();
      const offerName = selectOfferName(store);
      expect(offerName).toBeNull();
    });

    it('returns null if revenue is undefined', () => {
      const store = createRevenueStore({ revenue: undefined });
      const offerName = selectOfferName(store);
      expect(offerName).toBeNull();
    });

    it('returns null if offer is null', () => {
      const revenue = factoryRevenue.build({ offer: null });
      const store = createRevenueStore({ revenue });
      const offerName = selectOfferName(store);
      expect(offerName).toBeNull();
    });

    it('returns name if the offer has value', () => {
      const revenue = factoryRevenue.build();
      const store = createRevenueStore({ revenue });
      const offerName = selectOfferName(store);
      expect(offerName).toEqual(revenue.offer.name);
    });
  });

  describe('selectOfferName', () => {
    it('returns null if the store is empty', () => {
      const store = createRevenueStoreEmpty();
      const offerDescription = selectOfferDescription(store);
      expect(offerDescription).toBeNull();
    });

    it('returns null if revenue is undefined', () => {
      const store = createRevenueStore({ revenue: undefined });
      const offerDescription = selectOfferDescription(store);
      expect(offerDescription).toBeNull();
    });

    it('returns null if offer is null', () => {
      const revenue = factoryRevenue.build({ offer: null });
      const store = createRevenueStore({ revenue });
      const offerDescription = selectOfferDescription(store);
      expect(offerDescription).toBeNull();
    });

    it('returns description if the offer has value', () => {
      const revenue = factoryRevenue.build();
      const store = createRevenueStore({ revenue });
      const offerDescription = selectOfferDescription(store);
      expect(offerDescription).toEqual(revenue.offer.description);
    });
  });
});
