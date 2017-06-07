const Location = require('../../models/locationModel.js');
require('isomorphic-fetch');
const controller = {};
require('dotenv').config();
//geolocation fetching
// const DarkSky = require('dark-sky')
// const forecast = new DarkSky(process.env.DARK_SKY_SECRET_KEY)

controller.index = function(req, res) {
	let address = '';

	Location.findAll()
		.then(function(location) {
			res.json({
				data: location[0].address
			})
			// console.log(location[0].address)
			address = location[0].address.split(' ').join('+');
			// console.log(address)
		})
		.catch(function(err) {
	      res.status(400).json(err);
	    });

	  // fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${ address }&key=${ process.env.GMAPS_API_KEY }`)
	  //   .then((fetchRes) => {
	  //     return fetchRes.json();
	  //   }).then((jsonFetchRes) => {
	  //     console.log(jsonFetchRes);
	  //     // next();
	  //   });   
	function getLatAndLong(gReq, gRes, next) {  
	    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${ address }&key=${ process.env.GMAPS_API_KEY }`)
	    .then((fetchRes) => {
	      return fetchRes.json()
	    })
	    .then((jsonFetchRes) => {
	      console.log(jsonFetchRes);
	      console.log(address);
	    })
	}    
	getLatAndLong();
};




module.exports = controller;