const { Router } = require('express')
const CompanyController = require('../controllers/CompanyController');

const router = Router();

router.get('/', CompanyController.getAllWithEmployees);
router.post('/', CompanyController.createCompany);

module.exports = router;