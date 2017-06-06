const db = require('../db/config.js');

const Location = {};

Location.create = function(location) {
	return db.one(
    	`
	      INSERT INTO location
	      	(latitude, longitude, description, image_url)
	      VALUES 
	      	($1, $2, $3, $4) 
	      RETURNING 
	      	*
	    `,
    	[location.latitude, location.longitude, location.description, location.image_url]
	);
};