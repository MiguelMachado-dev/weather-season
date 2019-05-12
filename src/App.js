import React, { Component } from 'react';

import SeasonDisplay from './SeasonDisplay';

import Spinner from './Spinner';

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

  renderContent() {
    const { lat, errorMessage } = this.state;
    if (errorMessage && !lat) {
      return <div>Error: {errorMessage}</div>;
    }

    if (!errorMessage && lat) {
      return <SeasonDisplay lat={lat} />;
    }

    return <Spinner message="Please, accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
export default App;
