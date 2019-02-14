import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import CalculatorForm from './components/CalculatorForm';
import DataTable from './components/DataTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(newData) {
    this.setState({data: newData});
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <h1>TFSA vs RRSP Calculator App</h1>
          </Row>
          <Row>
            <Col sm={4}>
              <CalculatorForm onChange={this.onChange}/>
            </Col>
            <Col sm={8}>
              <DataTable data={this.state.data}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
