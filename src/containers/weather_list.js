import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMaps from '../components/google_map';


class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;
        
        return (
            <tr key={name}>
                <td><GoogleMaps lat={lat} lon={lon} /></td>
                <td>
                    <Chart data={temps} color="red" units="K"/>
                </td>
                <td>
                    <Chart data={pressure} color="orange" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidity} color="grey" units="%"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
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
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );

    }
}

function mapStateToProps({ weather }) {
    return { weather: weather };
}

export default connect(mapStateToProps)(WeatherList);