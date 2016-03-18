import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Sparkline from '../components/Sparkline';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
  renderWeather(city){
    const name = city.city.name
    const tempArray = city.list.map(function(item){
      return item.main.temp*(9/5)-459.67;
    });
    const pressureArray = city.list.map(function(item){
      return item.main.pressure;
    });
    const humidityArray = city.list.map(function(item){
      return item.main.humidity;
    });
    const { lon, lat } = city.city.coord;

    return(
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Sparkline
            data={tempArray}
            height={120}
            width={180}
            color="blue"
            units="C"
            />
        </td>
        <td>
          <Sparkline
            data={pressureArray}
            height={120}
            width={180}
            color="pink"
            units="hPa"
            />
        </td>
        <td>
          <Sparkline
            data={humidityArray}
            height={120}
            width={180}
            color="red"
            units="%"
            />

        </td>
      </tr>
    )
  }
}

function mapStateToProps(state){
  return {
    weather: state.weather,
  }
}

export default connect(mapStateToProps)(WeatherList);
