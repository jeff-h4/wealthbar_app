import AccountProjection from '../objects/AccountProjection';

const CalculationService = {
  calculateTfsaPerformance,
  calculateRrspPerformance
};
export default CalculationService;

function calculateTfsaPerformance(params) {
  let projections = calculateAccountGrowth(Object.assign({}, params));
  let result = calculateTfsaWithdrawal(projections);
  return result;
}

function calculateRrspPerformance(params) {
  params.deposit = undoInitialMarginalTax(params);
  let projections = calculateAccountGrowth(params);
  let result = calculateRrspWithdrawal(projections, params.futureMarginalTaxRate);
  return result;
}

function calculateTfsaWithdrawal(projections) {
  let finalReport = projections[projections.length-1].getReport();
  return {
    startingValue:        projections[0].startingValue,
    futureValue:          finalReport.futureEndValue,
    taxOnWithdrawal:      0,
    afterTaxFutureValue:  finalReport.futureEndValue
  };
}

function calculateRrspWithdrawal(projections, futureTaxRate) {
  let finalReport = projections[projections.length-1].getReport();
  let taxOnWithdrawal = finalReport.futureEndValue * futureTaxRate / 100;
  return {
    startingValue:       projections[0].startingValue,
    futureValue:         finalReport.futureEndValue,
    taxOnWithdrawal:     taxOnWithdrawal,
    afterTaxFutureValue: (finalReport.futureEndValue - taxOnWithdrawal)
  };
}

function undoInitialMarginalTax(params) {
  return params.deposit / (100 - params.currentMarginalTaxRate) * 100;
}

function calculateAccountGrowth(params) {
  let projections = [];
  for (let p = 0; p < params.duration; p++) {
    let inputParams = {
      startingValue:  (p === 0) ? params.deposit : projections[p-1].getReport().futureEndValue,
      returnRate:     params.returnRate,
      inflationRate:  params.inflationRate 
    };
    projections[p] = new AccountProjection(inputParams);
    projections[p].simulate();
  }
  return projections;
}