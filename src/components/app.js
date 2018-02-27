import React, { Component } from 'react';

import SearchBr from '../containers/SearchBar'
import WeatherList from '../containers/WeatherList'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBr />
        <WeatherList/>
      </div>
    );
  }
}
