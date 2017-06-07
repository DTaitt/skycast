const db = require('../db/config.js');

const Location = {};

Location.findAll = function() {
	return db.query('SELECT * FROM location');
};

module.exports = Location;