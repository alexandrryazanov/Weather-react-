import React from 'react';
import './App.css';

export default class Weather extends React.Component {
    constructor() {
      super();
      this.state = {
        weatherData: null
      };
    }
  
    componentDidMount() {
      const zip = this.props.zip;
      const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
        zip +
        "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
      fetch(URL).then(res => res.json()).then(json => {
        this.setState({ weatherData: json });
      });
    }
  
    far2Cel(deg) {
      return Math.floor((deg-32)/1.8);
    }
  
    render() {
      const weatherData = this.state.weatherData;
      if (!weatherData) return <div>Loading</div>;
      const weather = weatherData.weather[0];
      const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
      return (
        <div className="content">
          <h2>
            {weather.main} в {weatherData.name}
            <img src={iconUrl} alt={weatherData.description} />
          </h2>
          <p>Тек: {this.far2Cel(weatherData.main.temp)}°</p>
          <p>Макс: {this.far2Cel(weatherData.main.temp_max)}°</p>
          <p>Мин: {this.far2Cel(weatherData.main.temp_min)}°</p>
          <p>Ветер: {weatherData.wind.speed} миль/ч</p>
        </div>
      );
    }
  }