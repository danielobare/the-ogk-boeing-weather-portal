import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div>
        <p>{Math.round(data.main.temp)} Celsius</p>
        <div>
          <div>
            <span>Details: </span>
          </div>
          <div>
            <span>Temperature: </span>
            <span>{Math.round(data.main.feels_like)} Celsius</span>
          </div>
          <div>
            <span>Wind Speed: </span>
            <span>{data.wind.speed} m/s</span>
          </div>
          <div>
            <span>Humidity: </span>
            <span>{data.main.humidity} %</span>
          </div>
          <div>
            <span>Atmospheric Pressure: </span>
            <span>{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
