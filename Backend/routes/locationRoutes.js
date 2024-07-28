const express = require('express');
const { getLocations,saveLocation,deleteLocation } = require('../controllers/locationController');
const router = express.Router();
router.post('/api/users',saveLocation);
router.get('/api/locations', getLocations);
// router.delete('/:id',deleteLocation);

module.exports = router;
