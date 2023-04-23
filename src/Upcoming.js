import React from "react";

export default function Upcoming() {
  return (
    <div>
      <div className="col-12">
        <h3>Forecast</h3>
      </div>
      <div className="upcomingForecast">
        <div className="col">
          <div id="first-day" className="forecast-date">
            Mon
          </div>
          <img id="first-icon" src="media/thunder.svg" alt="weather" />
          <div className="forecast-temp">
            <span id="first-min" className="temp-min">
              min
            </span>
          </div>
        </div>
        <div className="col">
          <div id="second-day" className="forecast-date">
            Tue
          </div>
          <img id="second-icon" src="media/cloudy.svg" alt="weather" />
          <div className="forecast-temp">
            <span id="second-min" className="temp-min">
              min
            </span>
          </div>
        </div>
        <div className="col">
          <div id="third-day" className="forecast-date">
            Wed
          </div>
          <img id="third-icon" src="media/day.svg" alt="weather" />
          <div className="forecast-temp">
            <span id="third-min" className="temp-min">
              min
            </span>
          </div>
        </div>
        <div className="col">
          <div id="fourth-day" className="forecast-date">
            Thur
          </div>
          <img id="fourth-icon" src="media/cloudy-day-1.svg" alt="weather" />
          <div className="forecast-temp">
            <span id="fourth-min" className="temp-min">
              min
            </span>
          </div>
        </div>
        <div className="col">
          <div id="fifth-day" className="forecast-date">
            Fri
          </div>
          <img id="fifth-icon" src="media/cloudy-day-1.svg" alt="weather" />
          <div className="forecast-temp">
            <span id="fifth-min" className="temp-min">
              min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
