const express = require('express');
const router = express.Router();
const ParkingController = require('../controllers/ParkingController');

router.get('/current-vehicles', ParkingController.getCurrentVehicles);
router.post('/entry', ParkingController.registerEntry);
router.post('/exit', ParkingController.registerExit);
router.get('/total-revenue', ParkingController.getTotalRevenue);
router.get('/total-vehicles', ParkingController.getTotalVehicles);

module.exports = router;
