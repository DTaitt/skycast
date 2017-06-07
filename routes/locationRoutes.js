const express = require('express');
// const controller = require('../controllers/locationController.js');
const controller = require('../services/location/locationHelpers.js');

const locationRoutes = express.Router();


locationRoutes.get('/', controller.index);

module.exports = locationRoutes;