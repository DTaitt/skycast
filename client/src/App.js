import React, { Component } from 'react';
import './App.css';

import Header from './components/Header.jsx'
import LocationInput from './components/LocationInput.jsx'
import Footer from './components/Footer.jsx'
import CurrentInfo from './components/CurrentInfo.jsx'

class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     locationLat: null,
  //     locationLong: null,
  //   }

  //   this.setLocation = this.setLocation.bind(this);
  // }

  // setLocation(lat, long) {
  //   this.setState({
  //     locationLat: lat,
  //     locationLong: long,
  //   })
  //   console.log(`${this.state.locationLat} from app`)
  // }

  constructor(props) {
    super(props)
    this.state = {
      locationValue: null,
      locationLat: null,
      locationLong: null,
    }

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleLocationSubmit = this.handleLocationSubmit.bind(this);
  }

  handleLocationSubmit(event) {
    event.preventDefault();

    console.log(this.state.locationValue)

    //converts address to lat and long for use in Dark Sky API
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${ this.state.locationValue }&key=AIzaSyB_hFnwO_brmJWv01IMy5IaVBd8MJgSIZw
`)
    .then((res) => {
      return res.json()
    })
    .then((jsonRes) => {
      this.setState({
        locationLat: jsonRes.results[0].geometry.location.lat,
        locationLong: jsonRes.results[0].geometry.location.lng,
      })
      console.log(this.state.locationLat);
      console.log(this.state.locationLong);
    })
  }

  handleLocationChange(event) {
    this.setState({
      locationValue: event.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <LocationInput handleLocationChange={ this.handleLocationChange } handleLocationSubmit={ this.handleLocationSubmit } />
          <CurrentInfo />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
