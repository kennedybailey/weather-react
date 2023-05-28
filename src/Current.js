import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
export default function Current(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      feelsLike: Math.round(response.data.main.feels_like),
      city: response.data.name,
      icon:
        "http://openweathermap.org/img/wn/" +
        response.data.weather[0].icon +
        ".png",
    });
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5ef4de8cd6b7fefcd7c42f98cf464ce8&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (!weatherData.ready) {
    search();
  } else {
    return (
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="search for a city"
              id="search-bar"
              onChange={handleCityChange}
            />
            <input type="submit" value="search" id="submit" />
          </form>
        </div>
        <WeatherInfo info={weatherData} />
      </div>
    );
  }
}
