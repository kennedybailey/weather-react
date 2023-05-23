import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h2>
            <span className="temp" id="current-temp">
              {props.info.temperature}°C
            </span>
            <span className="temp">
              <img src={props.info.icon} alt="weather icon" />
            </span>
          </h2>
        </div>
        <div className="col-6">
          <h1>{props.info.city}</h1>
          <p>
            <FormattedDate date={props.info.date} /> <br />
            <span className="weatherinfo" id="weather-description">
              {props.info.description}
            </span>
            <span className="weatherinfo">,</span>
            <span className="weatherinfo">Wind Speed: </span>
            <span className="weatherinfo" id="wind-speed">
              {props.info.wind}km/h
            </span>
            <br />
            <span className="weatherinfo">Feels like:</span>
            <span className="temp weatherinfo" id="feels-like-temp">
              {props.info.feelsLike}°C
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
