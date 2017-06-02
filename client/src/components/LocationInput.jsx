import React, { Component } from 'react';

class LocationInput extends Component {
	render() {
		return (
			<form className="location_input">
				<div className="form-group">
					<label htmlFor="address_input">Address</label>
					<input type="text" name="location" placeholder="Enter Address Here" id="address_input" className="form-control" />
				</div>	
				<input className="btn btn-default" type="submit" value="Submit" />
			</form>
		)
	}
}

export default LocationInput;