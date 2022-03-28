const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const CompanyRouter = require('./routers/companyRouter');
const EmployeeRouter = require('./routers/employeeRouter');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/employee', EmployeeRouter);
app.use('/company', CompanyRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`ESCUTANDO NA PORTA ${PORT}`);
});