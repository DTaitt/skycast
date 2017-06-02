import React, { Component } from 'react';
import './App.css';

import Header from './components/Header.jsx'
import LocationInput from './components/LocationInput.jsx'
import Footer from './components/Footer.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <LocationInput />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
