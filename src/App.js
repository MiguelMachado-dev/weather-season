import React, { Component } from 'react';

class App extends Component {
  state = {
    lat: null,
    errorMessage: '',
  };

  componentDidMount() {
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
