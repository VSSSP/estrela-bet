const { Router } = require('express');
const EmployeeController = require('../controllers/EmployeeController');

const router = Router();

router.get('/', EmployeeController.getAll);
router.post('/', EmployeeController.createEmployee);

module.exports = router;
