import React, { useState } from "react";
import "./css/CityTemperature.css";
export default function CityTemperature(props) {
  return (
    <div className="city-temperature">
      <div className="curent-city">
        <span className="city-name">{props.city} </span>
        <span className="curent-temperature">
          <span> {props.temperature}</span>
          <span className="units selectUnit"> °C </span>
        </span>
      </div>
    </div>
  );
}
