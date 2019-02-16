import React from 'react'
import Form from 'react-bootstrap/Form';
import debounce from 'lodash/debounce';

import CalculationService from '../services/CalculationService';

export default class CalculatorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMarginalTaxRate: 38.29,
      futureMarginalTaxRate: 20.64,
      principal: 1000,
      duration: 30,
      returnRate: 6.5,
      inflationRate: 2.5,
    };

    this.onChange     = this.onChange.bind(this);
    this.recalculate  = debounce(this.recalculate, 200);
  }

  componentDidMount() {
    this.recalculate();
  }

  onChange(event) {
    let floatVal = parseFloat(event.target.value);
    if (isNaN(floatVal) || floatVal < 0) return;
    this.setState({[event.target.name]: floatVal});
    this.recalculate();
  }

  recalculate() {
    let params = {
      currentMarginalTaxRate: this.state.currentMarginalTaxRate,
      futureMarginalTaxRate:  this.state.futureMarginalTaxRate,
      deposit:                this.state.principal,
      duration:               this.state.duration,
      returnRate:             this.state.returnRate,
      inflationRate:          this.state.inflationRate
    };
    let tfsaResult = CalculationService.calculateTfsaPerformance(params);
    let rrspResult = CalculationService.calculateRrspPerformance(params);

    this.props.onChange({tfsaResult, rrspResult});
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Current Marginal Tax Rate (%):</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            name="currentMarginalTaxRate"
            value={this.state.currentMarginalTaxRate}
            onChange={this.onChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Future Marginal Tax Rate (%):</Form.Label>
          <Form.Control
             size="sm"
             type="text"
             name="futureMarginalTaxRate"
             value={this.state.futureMarginalTaxRate}
             onChange={this.onChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Principal ($):</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            name="principal"
            value={this.state.principal}
            onChange={this.onChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Duration (years):</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            name="duration"
            value={this.state.duration}
            onChange={this.onChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Return on Investment Rate (%):</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            name="returnRate"
            value={this.state.returnRate}
            onChange={this.onChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Inflation Rate (%):</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            name="inflationRate"
            value={this.state.inflationRate}
            onChange={this.onChange} />
        </Form.Group>
      </Form>
    );
  }
}

