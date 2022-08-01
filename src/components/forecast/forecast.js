import React from "react";
import {
  AccordionItemHeading,
  AccordionItemButton,
  Accordion,
  AccordionItem,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const DaysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = DaysOfTheWeek.slice(dayInAWeek, DaysOfTheWeek.length).concat(
    DaysOfTheWeek.slice(0, dayInAWeek)
  );

  return (
    <>
      <Accordion>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_max)} Celsius /
                    {Math.round(item.main.temp_min)} Celsius
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="weather-days">
                  <label>Pressure: </label>
                  <label>{item.main.pressure}</label>
                </div>

                <div className="weather-days">
                  <label>Clouds: </label>
                  <label>{item.clouds.all}%</label>
                </div>

                <div className="weather-days">
                  <label>Humidity: </label>
                  <label>{item.main.humidity}</label>
                </div>

                <div className="weather-days">
                  <label>Wind speed: </label>
                  <label>{item.wind.speed} m/s</label>
                </div>

                <div className="weather-days">
                  <label>Temperature: </label>
                  <label>{item.main.feels_like} Celsius</label>
                </div>

                <div className="weather-days">
                  <label>Sea level: </label>
                  <label>{item.main.sea_level} meters</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;

//inspiration from youtube video React Weather App by freecodecamp
