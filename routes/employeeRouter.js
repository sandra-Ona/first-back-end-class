const express = require('express');
const router= express.Router();
const {getEmployees, getEmployee, deleteEmployee, createEmployee, updateEmployee} = require('../controller/employeeController');

// router.get('/employees', getEmployees);
// router.post('/employees', createEmployee);
router.route('/employees').get(getEmployees).post(createEmployee);

// router.get('/employees/:id', getEmployee);
// router.delete('/employees/:id', deleteEmployee);
// router.patch('/employees/:id', updateEmployee);
router.route('/employees/:id').get(getEmployee).patch(updateEmployee).delete(deleteEmployee);

module.exports = router