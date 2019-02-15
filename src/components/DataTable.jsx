import React from 'react'
import Table from 'react-bootstrap/Table';

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.renderTableHeader = this.renderTableHeader.bind(this);
    this.renderRow         = this.renderRow.bind(this);
    this.formatTableData   = this.formatTableData.bind(this);
  }

  renderTableHeader() {
    return (
      <thead>
        <tr>
          <th></th>
          <th>TFSA</th>
          <th>RRSP</th>
        </tr>
      </thead>
    )
  }

  renderRow(key, rowData) {
    return (
      <tr key={key}>
        <th>{rowData.header}</th>
        {rowData.values.map((entry) => <td>{entry}</td>)}
      </tr>
    )
  }

  formatTableData(inputData) {
    return {
      startingValue: {
        header: 'Initial Account Deposit',
        values: [inputData.tfsaResult.startingValue.toFixed(2), inputData.rrspResult.startingValue.toFixed(2)]
      },
      futureValue: {
        header: 'Future Value',
        values: [inputData.tfsaResult.futureValue.toFixed(2), inputData.rrspResult.futureValue.toFixed(2)]
      },
      taxOnWithdrawal: {
        header: 'Tax on Withdrawal',
        values: [inputData.tfsaResult.taxOnWithdrawal.toFixed(2), inputData.rrspResult.taxOnWithdrawal.toFixed(2)]
      },
      afterTaxFutureValue: {
        header: 'After Tax Future Value',
        values: [inputData.tfsaResult.afterTaxFutureValue.toFixed(2), inputData.rrspResult.afterTaxFutureValue.toFixed(2)]
      }
    }
  }

  render() {
    if (this.props.data === null) return null;

    let tableData = this.formatTableData(this.props.data);
    console.log('Table Data is');
    console.log(tableData);
    return (
      <Table striped>
        {this.renderTableHeader()}
        <tbody>
          {this.renderRow(1,tableData.startingValue)}
          {this.renderRow(2,tableData.futureValue)}
          {this.renderRow(3,tableData.taxOnWithdrawal)}
          {this.renderRow(4,tableData.afterTaxFutureValue)}
        </tbody>
      </Table>
    );
  }
}

