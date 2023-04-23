import React from "react";

export default function Current() {
  return (
    <div className="row">
      <div className="col-6">
        <button id="temp-change">Fahrenheit</button>
      </div>
      <div className="col-6">
        <form>
          <input type="text" placeholder="search for a city" id="search-bar" />
          <input type="submit" value="search" id="submit" />
        </form>
      </div>

      <div className="col-6">
        <h2>
          <span className="temp" id="current-temp">
            0°C
          </span>
          <span className="temp">
            <img id="main-icon" src="media/thunder.svg" alt="weather" />
          </span>
        </h2>
      </div>
      <div className="col-6">
        <h1>City</h1>
        <p>
          <span id="date">placeholder</span> <br />
          <span className="weatherinfo" id="weather-description">
            rain
          </span>
          <span className="weatherinfo">,</span>
          <span className="weatherinfo">Wind Speed: </span>
          <span className="weatherinfo" id="wind-speed">
            {" "}
            5 km/h
          </span>
          <br />
          <span className="weatherinfo">Feels like</span>
          <span className="temp weatherinfo" id="feels-like-temp">
            -7°C
          </span>
        </p>
      </div>
    </div>
  );
}
