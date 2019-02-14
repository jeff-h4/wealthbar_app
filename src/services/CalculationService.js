import AccountProjection from '../objects/AccountProjection';

const CalculationService = {
  calculate
};
export default CalculationService;

function calculate(params) {
  let tfsa = calculateTFSAGrowth(Object.assign({}, params));
  let rrsp = calculateRRSPGrowth(Object.assign({}, params));
  let tfsaResult = calculateTfsaWithdrawal(tfsa);
  let rrspResult = calculateRrspWithdrawal(rrsp, params.futureMarginalTaxRate);
  return {tfsaResult, rrspResult};
}

function calculateTfsaWithdrawal(projections) {
  let finalReadableReport = projections[projections.length-1].getReadableReport();
  return {
    nominalEndValue:     finalReadableReport.nominalEndValue,
    futureValue:         finalReadableReport.futureEndValue,
    taxOnWithdrawal:     0,
    afterTaxFutureValue: finalReadableReport.futureEndValue
  };
}

function calculateRrspWithdrawal(projections, futureTaxRate) {
  let finalReport = projections[projections.length-1].getReport();
  let taxOnWithdrawal = finalReport.futureEndValue * futureTaxRate / 100;
  return {
    nominalEndValue:     finalReport.nominalEndValue.toFixed(2),
    futureValue:         finalReport.futureEndValue.toFixed(2),
    taxOnWithdrawal:     taxOnWithdrawal.toFixed(2),
    afterTaxFutureValue: (finalReport.futureEndValue - taxOnWithdrawal).toFixed(2)
  };
}

function undoInitialMarginalTax(params) {
  return params.deposit / (100 - params.currentMarginalTaxRate) * 100;
}

function calculateRRSPGrowth(params) {
  params.deposit = undoInitialMarginalTax(params);
  return calculateAccountGrowth(params);
}
function calculateTFSAGrowth(params) {
  return calculateAccountGrowth(params);
}

function calculateAccountGrowth(params) {
  let projections = [];
  console.log(params);
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