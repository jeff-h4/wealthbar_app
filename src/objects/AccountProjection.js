import Report from './Report';

export default class AccountProjection {
  constructor(inputParams) {
    this.startingValue   = inputParams.startingValue;
    this.returnRate      = inputParams.returnRate;
    this.inflationRate   = inputParams.inflationRate;
    this.report          = null;
  }

  realReturnRate() {
    return ((1 + this.returnRate/100)/(1 + this.inflationRate/100) - 1) * 100;
  }

  nominalGain() {
    return this.startingValue * this.returnRate / 100;
  }

  realGain() {
    return this.startingValue * this.realReturnRate() / 100;
  }

  nominalEndValue() {
    return this.startingValue + this.nominalGain();
  }

  futureEndValue() {
    return this.startingValue + this.realGain();
  }

  simulate() {
    this.report = new Report({
      startingValue:    this.startingValue,
      returnRate:       this.returnRate,
      inflationRate:    this.inflationRate,
      gain:             this.nominalGain(),
      realGain:         this.realGain(),
      nominalEndValue:  this.nominalEndValue(),
      futureEndValue:   this.futureEndValue()
    })
  }

  getReport() {
    return this.report;
  }

  getReadableReport() {
    return {
      startingValue:    this.startingValue.toFixed(2),
      returnRate:       this.returnRate.toFixed(2),
      inflationRate:    this.inflationRate.toFixed(2),
      gain:             this.nominalGain().toFixed(2),
      realGain:         this.realGain().toFixed(2),
      nominalEndValue:  this.nominalEndValue().toFixed(2),
      futureEndValue:   this.futureEndValue().toFixed(2)
    };
  }
}