import React, { Component } from 'react';

class App extends Component {
  // very first function that is going to be called any time an instance
  // of this call is created
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: '',
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude } = position.coords;
        this.setState({ lat: latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      },
    );
  }

  render() {
    const { lat, errorMessage } = this.state;
    if (errorMessage && !lat) {
      return <div>Error: {errorMessage}</div>;
    }

    if (!errorMessage && lat) {
      return <div>Latitude: {lat}</div>;
    }

    return <div>Loading!</div>;
  }
}
export default App;
