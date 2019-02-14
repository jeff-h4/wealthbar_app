export default class Report {
  constructor(values) {
    this.startingValue    = values.startingValue;
    this.returnRate       = values.returnRate;
    this.inflationRate    = values.inflationRate;
    this.gain             = values.gain;
    this.realGain         = values.realGain;
    this.nominalEndValue  = values.nominalEndValue;
    this.futureEndValue   = values.futureEndValue;
  }

  print() {
    console.log('Started with:')
    console.log(`  startingValue: ${this.startingValue}`);
    console.log(`  returnRate:    ${this.returnRate}`);
    console.log(`  inflationRate: ${this.inflationRate}`);
    console.log('Ended with:')
    console.log(`  gain:            ${this.gain}`);
    console.log(`  realGain:        ${this.realGain}`);
    console.log(`  nominalEndValue: ${this.nominalEndValue}`);
    console.log(`  futureEndValue:  ${this.futureEndValue}`);
  }
}
