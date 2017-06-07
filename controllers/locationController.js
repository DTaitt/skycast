const Location = require('../models/locationModel.js');

const controller = {};

//dark sky fetching
require('dotenv').config()
const DarkSky = require('dark-sky')
const forecast = new DarkSky(process.env.DARK_SKY_SECRET_KEY)

controller.index = function(req, res) {
	Location.findAll()
		.then(function(location) {
			res.json({
				data: location
			})
		})
		.catch(function(err) {
	      res.status(400).json(err);
	    });
	// forecast
 //    .latitude('37.8267')            // required: latitude, string.
 //    .longitude('-122.423')          // required: longitude, string.
 //    .time('2016-01-28')             // optional: date, string 'YYYY-MM-DD'.
 //    .units('uk2')                    // optional: units, string, refer to API documentation.
 //    .language('en')                 // optional: language, string, refer to API documentation.
 //    .exclude('minutely,alerts,flags')      // optional: exclude, string, refer to API documentation.
 //    .get()                          // execute your get request.
 //    .then(weatherRes => {                  // handle your success response.
 //        console.log(weatherRes)
 //    })
 //    .catch(err => {                 // handle your error response.
 //        console.log(err)
 //    })
};

module.exports = controller;