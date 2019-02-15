import AccountProjection from './AccountProjection';

let FLOAT_PRECISION = 0;

describe('AccountProjection', () => {
  let params = {};
  beforeEach(() => {
    params = {
      startingValue: 2000,
      returnRate: 10,
      inflationRate: 3
    };
  });

  describe('realReturnRate()', () => {
    test('is calculated correctly', () => {
      let p = new AccountProjection(params);
      let expRealReturnRate = ((1 + 10/100)/(1+3/100) -1) * 100;
      expect(p.realReturnRate()).toBeCloseTo(expRealReturnRate, FLOAT_PRECISION);
    });
  });

  describe('nominalGain()', () => {
    test('is calculated correctly', () => {
      let p = new AccountProjection(params);
      let expNominalGain = 2000 * 10/100;
      expect(p.nominalGain()).toBeCloseTo(expNominalGain, FLOAT_PRECISION);
    });
  });

  describe('realGain()', () => {
    test('is calculated correctly', () => {
      let p = new AccountProjection(params);
      let expRealReturnRate = ((1 + 10/100)/(1+3/100) -1) * 100;
      let expRealGain = 2000 * expRealReturnRate / 100;
      expect(p.realGain()).toBeCloseTo(expRealGain, FLOAT_PRECISION);
    });
  });

  describe('nominalEndValue()', () => {
    test('is calculated correctly', () => {
      let p = new AccountProjection(params);
      let expNominalGain = 2000 * 10/100;
      let expNominalEndValue = 2000 + expNominalGain;
      expect(p.nominalEndValue()).toBeCloseTo(expNominalEndValue, FLOAT_PRECISION);
    });
  });

  describe('futureEndValue()', () => {
    test('is calculated correctly', () => {
      let p = new AccountProjection(params);
      let expRealReturnRate = ((1 + 10/100)/(1+3/100) -1) * 100;
      let expRealGain = 2000 * expRealReturnRate / 100;
      let expFutureEndValue = 2000 + expRealGain;
      expect(p.futureEndValue()).toBeCloseTo(expFutureEndValue, FLOAT_PRECISION);
    });
  });
});
