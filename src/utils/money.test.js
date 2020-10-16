const { formatToUSD } = require('./money');

describe('utils / money', () => {
  describe('formatToUSD', () => {
    it('should return string empty if value is null', () => {
      const result = formatToUSD(null);
      expect(result).toEqual('');
    });

    it('should return "$1.00" if value is 1', () => {
      const result = formatToUSD(1);
      expect(result).toEqual('$1.00');
    });

    it('should return "$12.00" if value is 12', () => {
      const result = formatToUSD(12);
      expect(result).toEqual('$12.00');
    });

    it('should return "$123.00" if value is 123', () => {
      const result = formatToUSD(123);
      expect(result).toEqual('$123.00');
    });

    it('should return "$1,234.00" if value is 1234', () => {
      const result = formatToUSD(1234);
      expect(result).toEqual('$1,234.00');
    });

    it('should return "$12,345.00" if value is 12345', () => {
      const result = formatToUSD(12345);
      expect(result).toEqual('$12,345.00');
    });

    it('should return "$123,456.00" if value is 123456', () => {
      const result = formatToUSD(123456);
      expect(result).toEqual('$123,456.00');
    });

    it('should return "$1,234,567.00" if value is 1234567', () => {
      const result = formatToUSD(1234567);
      expect(result).toEqual('$1,234,567.00');
    });

    it('should return "$12,345.67" if value is 12345.67', () => {
      const result = formatToUSD(12345.67);
      expect(result).toEqual('$12,345.67');
    });
  });
});
