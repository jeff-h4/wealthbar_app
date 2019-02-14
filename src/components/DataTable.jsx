import React from 'react'

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
      finalValue: {
        header: 'Nominal Final Value',
        values: [inputData.tfsaResult.nominalEndValue, inputData.rrspResult.nominalEndValue]
      },
      futureValue: {
        header: 'Future Value',
        values: [inputData.tfsaResult.futureValue, inputData.rrspResult.futureValue]
      },
      taxOnWithdrawal: {
        header: 'Tax on Withdrawal',
        values: [inputData.tfsaResult.taxOnWithdrawal, inputData.rrspResult.taxOnWithdrawal]
      },
      afterTaxFutureValue: {
        header: 'After Tax Future Value',
        values: [inputData.tfsaResult.afterTaxFutureValue, inputData.rrspResult.afterTaxFutureValue]
      }
    }
  }

  render() {
    if (this.props.data === null) return null;

    let tableData = this.formatTableData(this.props.data);
    console.log('Table Data is');
    console.log(tableData);
    return (
      <table className="table">
        {this.renderTableHeader()}
        <tbody>
          {this.renderRow(1,tableData.finalValue)}
          {this.renderRow(2,tableData.futureValue)}
          {this.renderRow(3,tableData.taxOnWithdrawal)}
          {this.renderRow(4,tableData.afterTaxFutureValue)}
        </tbody>
      </table>
    );
  }
}

