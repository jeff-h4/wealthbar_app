import React, { Component } from 'react';
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
      <div className="App container">
        <div className="row">
          <h1>TFSA vs RRSP Calculator App</h1>
        </div>
        <div className="row">
          <div className="col-4">
            <CalculatorForm onChange={this.onChange}/>
          </div>
          <div className="col-8">
            <DataTable data={this.state.data}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
