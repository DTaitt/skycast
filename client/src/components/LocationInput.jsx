import React, { Component } from 'react';

class LocationInput extends Component {
	
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			locationValue: null,
// 			locationLat: null,
// 			locationLong: null,
// 		}

// 		this.handleLocationChange = this.handleLocationChange.bind(this);
// 		this.handleLocationSubmit = this.handleLocationSubmit.bind(this);
// 	}

// 	handleLocationSubmit(event) {
// 		event.preventDefault();

// 		console.log(this.state.locationValue)

// 		//converts address to lat and long for use in Dark Sky API
// 		fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${ this.state.locationValue }&key=AIzaSyB_hFnwO_brmJWv01IMy5IaVBd8MJgSIZw
// `)
// 		.then((res) => {
// 			return res.json()
// 		})
// 		.then((jsonRes) => {
// 			console.log(jsonRes.results[0].geometry.location.lat);
// 			console.log(jsonRes.results[0].geometry.location.lng);
// 			this.setState({
// 				locationLat: jsonRes.results[0].geometry.location.lat,
// 				locationLong: jsonRes.results[0].geometry.location.lng,
// 			})
// 		})
// 	}

// 	handleLocationChange(event) {
// 		this.setState({
// 			locationValue: event.target.value,
// 		})
// 	}

	render() {
		return (
			<form className="location_input" onSubmit={ this.props.handleLocationSubmit } >
				<div className="form-group">
					<label htmlFor="address_input">Address</label>
					<input type="text" name="location" placeholder="Enter Address Here" id="address_input" className="form-control" onChange={ this.props.handleLocationChange } />
				</div>	
				<input className="btn btn-default" type="submit" value="Submit" />
			</form>
		)
	}
}

export default LocationInput;