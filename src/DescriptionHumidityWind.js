import React from "react";
import "./css/DescriptionHumidityWind.css";

export default function CurentDescriptionWeather(props) {
  return (
    <div className="curent-weather">
      <p>{props.description}</p>
      <p>Humidity: {props.humidity}%</p>
      <p>Wind: {props.wind} m/s</p>
    </div>
  );
}
