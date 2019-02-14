import React from 'react'
import CalculationService from '../services/CalculationService';

export default class CalculatorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMarginalTaxRate: 38.29,
      futureMarginalTaxRate: 20.64,
      principal: 1000,
      duration: 2,
      returnRate: 5,
      inflationRate: 2,
    };

    this.onChange     = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.printValues  = this.printValues.bind(this);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  printValues() {
    console.log(this.state);
  }

  handleSubmit(event) {
    console.log('The form was submitted');
    event.preventDefault();
    let params = {
      currentMarginalTaxRate: this.state.currentMarginalTaxRate,
      futureMarginalTaxRate:  this.state.futureMarginalTaxRate,
      deposit:                this.state.principal,
      duration:               this.state.duration,
      returnRate:             this.state.returnRate,
      inflationRate:          this.state.inflationRate
    };
    let result = CalculationService.calculate(params);

    this.props.onChange(result);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Current Marginal Tax Rate (%):</label>
          <input type="text" className="form-control" name="currentMarginalTaxRate" value={this.state.currentMarginalTaxRate} onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label>Future Marginal Tax Rate (%):</label>
          <input type="text" className="form-control" name="futureMarginalTaxRate" value={this.state.futureMarginalTaxRate} onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label>Principal ($):</label>
          <input type="text" className="form-control" name="principal" value={this.state.principal} onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label>Duration (years):</label>
          <input type="text" className="form-control" name="duration" value={this.state.duration} onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label>Return on Investment Rate (%):</label>
          <input type="text" className="form-control" name="returnRate" value={this.state.returnRate} onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label>Inflation Rate (%):</label>
          <input type="text" className="form-control" name="inflationRate" value={this.state.inflationRate} onChange={this.onChange} />
        </div>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

