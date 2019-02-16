## TFSA vs RRSP Calculator

Created with ReactJS.

### Requirements
- NodeJS (v8.15.0)
- yarn (v1.13.0)

### `yarn install`

Run this to install the project's packages.
### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Runs the Jest test suite. Tests are more of a sample than a full suite.
Calculations within the test suite use numbers from the real Wealthbar TFSA vs RRSP Calculator.

### Structure
App.jsx
 - CalculatorForm
 - Instructions
 - DataTable

CalculationService knows about comparing the TFSA vs RRSP, and utilizes
AccountProjection objects to calculate the performance. AccountProjection
represents the performance for a given year.

### Comments

- Javascript doesn't handle financial calculations with very good precision.
However, due to the intended application, I've stuck with using the built-in
JS Number. AccountProjection can be modified to use a finance library instead if needed.

