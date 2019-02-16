import React from 'react';
import renderer from 'react-test-renderer';

import DataTable from './DataTable';

describe('DataTable', () => {
  test('renders null if no data passed in', () => {
    const component = renderer.create(<DataTable data={null}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders datatable if data passed in', () => {
    let data = {
      tfsaResult: {startingValue: 100, futureValue: 200, taxOnWithdrawal: 0, afterTaxFutureValue: 200},
      rrspResult: {startingValue: 100, futureValue: 200, taxOnWithdrawal: 20, afterTaxFutureValue: 180}
    }
    const component = renderer.create(<DataTable data={data}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});