const express = require('express');
const bodyParser = require('body-parser');
const CompanyRouter = require('./routers/companyRouter');
const EmployeeRouter = require('./routers/employeeRouter');

const app = express();
app.use(bodyParser.json());

app.use('/employee', EmployeeRouter);
app.use('/company', CompanyRouter);

app.listen(3001, () => {
  console.log('Listening on port: 3001');
});