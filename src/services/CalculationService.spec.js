import CalculationService from './CalculationService';

let FLOAT_PRECISION = 0;

describe('CalculationService', () => {
  describe('calculateTfsaPerformance()', () => {
    describe('matches real WealthBar Calculator calculations', () => {
      test('Scenario 1', () => {
        let params = {
          currentMarginalTaxRate: 38.29,
          futureMarginalTaxRate: 20.64,
          deposit: 1000,
          duration: 30,
          returnRate: 6.5,
          inflationRate: 2.5
        }
        let expStartingValue = 1000;
        let expFutureValue = 3153.35;
        let expTaxOnWithdrawal = 0;
        let expAfterTaxFuturevalue = 3153.35;
        let result = CalculationService.calculateTfsaPerformance(params);
        expect(result.startingValue).toBeCloseTo(expStartingValue, FLOAT_PRECISION);
        expect(result.futureValue).toBeCloseTo(expFutureValue, FLOAT_PRECISION);
        expect(result.taxOnWithdrawal).toBeCloseTo(expTaxOnWithdrawal, FLOAT_PRECISION);
        expect(result.afterTaxFutureValue).toBeCloseTo(expAfterTaxFuturevalue, FLOAT_PRECISION);
      });

      test('Scenario 2', () => {
        let params = {
          currentMarginalTaxRate: 28.20,
          futureMarginalTaxRate: 14.18,
          deposit: 1000,
          duration: 30,
          returnRate: 5,
          inflationRate: 2
        }
        let expStartingValue = 1000;
        let expFutureValue = 2386.02;
        let expTaxOnWithdrawal = 0;
        let expAfterTaxFuturevalue = 2386.02;
        let result = CalculationService.calculateTfsaPerformance(params);
        expect(result.startingValue).toBeCloseTo(expStartingValue, FLOAT_PRECISION);
        expect(result.futureValue).toBeCloseTo(expFutureValue, FLOAT_PRECISION);
        expect(result.taxOnWithdrawal).toBeCloseTo(expTaxOnWithdrawal, FLOAT_PRECISION);
        expect(result.afterTaxFutureValue).toBeCloseTo(expAfterTaxFuturevalue, FLOAT_PRECISION);
      });
    });
  });
  describe('calculateRrspPerformance()', () => {
    describe('matches real WealthBar Calculator calculations', () => {
      test('Scenario 1', () => {
        let params = {
          currentMarginalTaxRate: 38.29,
          futureMarginalTaxRate: 20.64,
          deposit: 1000,
          duration: 30,
          returnRate: 6.5,
          inflationRate: 2.5
        }
        let expStartingValue = 1620.48;
        let expFutureValue = 5109.95;
        let expTaxOnWithdrawal = 1054.87;
        let expAfterTaxFuturevalue = 4055.08;
        let result = CalculationService.calculateRrspPerformance(params);
        expect(result.startingValue).toBeCloseTo(expStartingValue, FLOAT_PRECISION);
        expect(result.futureValue).toBeCloseTo(expFutureValue, FLOAT_PRECISION);
        expect(result.taxOnWithdrawal).toBeCloseTo(expTaxOnWithdrawal, FLOAT_PRECISION);
        expect(result.afterTaxFutureValue).toBeCloseTo(expAfterTaxFuturevalue, FLOAT_PRECISION);
      });

      test('Scenario 2', () => {
        let params = {
          currentMarginalTaxRate: 28.20,
          futureMarginalTaxRate: 14.18,
          deposit: 1000,
          duration: 30,
          returnRate: 5,
          inflationRate: 2
        }
        let expStartingValue = 1392.76;
        let expFutureValue = 3323.15;
        let expTaxOnWithdrawal = 471.32;
        let expAfterTaxFuturevalue = 2851.83;
        let result = CalculationService.calculateRrspPerformance(params);
        expect(result.startingValue).toBeCloseTo(expStartingValue, FLOAT_PRECISION);
        expect(result.futureValue).toBeCloseTo(expFutureValue, FLOAT_PRECISION);
        expect(result.taxOnWithdrawal).toBeCloseTo(expTaxOnWithdrawal, FLOAT_PRECISION);
        expect(result.afterTaxFutureValue).toBeCloseTo(expAfterTaxFuturevalue, FLOAT_PRECISION);
      });
    });
  });

});
