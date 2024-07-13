const express = require('express');
const { getLocations,saveLocation,deleteLocation } = require('../controllers/locationController');
const router = express.Router();
router.post('/',saveLocation);
router.get('/', getLocations);
router.delete('/:id',deleteLocation);

module.exports = router;
