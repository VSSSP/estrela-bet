const { Router } = require('express')
const CompanyController = require('../controllers/CompanyController');

const router = Router();

router.get('/', CompanyController.getAll);
router.get('/:id', CompanyController.getCompanyById);
router.post('/', CompanyController.createCompany);

module.exports = router;