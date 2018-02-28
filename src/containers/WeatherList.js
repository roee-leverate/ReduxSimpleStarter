import React, {Component} from 'react'
import { connect } from 'react-redux'
import Chart from '../components/Chart'
import GoogleMap from '../components/GoogleMap'

class WeatherList extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    //const lon = cityData.city.coord.lon
    //const lat = cityData.city.coord.lat
    const {lon, lat} = cityData.city.coord

    console.log(lon, lat);

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K"/></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp.</th>
            <th>Pressure</th>
            <th>Humid.</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return { weather}
}

export default connect(mapStateToProps)(WeatherList)
