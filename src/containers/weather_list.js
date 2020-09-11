import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import { Snackbar } from "../components/reusables/snackbar";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    return (
      <tr key={name}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart data={temps} color="red" units="K" />
        </td>
        <td>
          <Chart data={pressure} color="orange" units="hPa" />
        </td>
        <td>
          <Chart data={humidity} color="grey" units="%" />
        </td>
      </tr>
    );
  }

  removeDuplicates(arr) {
    const uniqueAddresses = Array.from(new Set(arr.map(a => a.city.id))).map(
      id => {
        return arr.find(a => a.city.id === id);
      }
    );
    return uniqueAddresses;
  }



  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th> CITY </th>
              <th> TEMPERATURE (K) </th>
              <th> PRESSURE (hPa) </th>
              <th> HUMIDITY (%) </th>
            </tr>
          </thead>
          <tbody>
            {this.removeDuplicates(this.props.weather.data).map(this.renderWeather)}
          </tbody>
        </table>
        <Snackbar message="snackbar"/>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
