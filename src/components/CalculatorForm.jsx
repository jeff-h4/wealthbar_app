import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Current Marginal Tax Rate (%):</Form.Label>
          <Form.Control size="sm" type="text" name="currentMarginalTaxRate" value={this.state.currentMarginalTaxRate} onChange={this.onChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Future Marginal Tax Rate (%):</Form.Label>
          <Form.Control size="sm" type="text" name="futureMarginalTaxRate" value={this.state.futureMarginalTaxRate} onChange={this.onChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Principal ($):</Form.Label>
          <Form.Control size="sm" type="text" name="principal" value={this.state.principal} onChange={this.onChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Duration (years):</Form.Label>
          <Form.Control size="sm" type="text" name="duration" value={this.state.duration} onChange={this.onChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Return on Investment Rate (%):</Form.Label>
          <Form.Control size="sm" type="text" name="returnRate" value={this.state.returnRate} onChange={this.onChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Inflation Rate (%):</Form.Label>
          <Form.Control size="sm" type="text" className="form-control" name="inflationRate" value={this.state.inflationRate} onChange={this.onChange} />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    );
  }
}

