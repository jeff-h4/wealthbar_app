import React from 'react'
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.renderTableHeader = this.renderTableHeader.bind(this);
    this.renderRow         = this.renderRow.bind(this);
    this.formatTableData   = this.formatTableData.bind(this);
    this.extractValues     = this.extractValues.bind(this);
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
      <tr>
        <th>{rowData.header}</th>
        {rowData.values.map((entry, index) => <td key={index}>{entry}</td>)}
      </tr>
    )
  }

  extractValues(data, targetValue) {
    return Object.keys(data).map(k => data[k][targetValue]);
  }

  formatTableData(inputData) {
    return {
      startingValue: {
        header: 'Initial Account Deposit',
        values: this.extractValues(inputData,'startingValue').map(x => x.toFixed(2))
      },
      futureValue: {
        header: 'Future Value',
        values: this.extractValues(inputData,'futureValue').map(x => x.toFixed(2))
      },
      taxOnWithdrawal: {
        header: 'Tax on Withdrawal',
        values: this.extractValues(inputData,'taxOnWithdrawal').map(x => x.toFixed(2))
      },
      afterTaxFutureValue: {
        header: 'After Tax Future Value',
        values: this.extractValues(inputData,'afterTaxFutureValue').map(x => x.toFixed(2))
      }
    }
  }

  render() {
    if (this.props.data === null) return null;

    let tableData = this.formatTableData(this.props.data);
    return (
      <Table striped>
        {this.renderTableHeader()}
        <tbody>
          {this.renderRow(1, tableData.startingValue)}
          {this.renderRow(2, tableData.futureValue)}
          {this.renderRow(3, tableData.taxOnWithdrawal)}
          {this.renderRow(4, tableData.afterTaxFutureValue)}
        </tbody>
      </Table>
    );
  }
}

DataTable.propTypes = {
  data: PropTypes.shape({
    tfsaResult: PropTypes.object,
    rrspResult: PropTypes.object
  })
}
