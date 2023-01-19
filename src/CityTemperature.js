import React, { useState } from "react";
import "./css/CityTemperature.css";
export default function CityTemperature(props) {
  let [metric, setMetric] = useState("celsius");
  function showFar(event) {
    event.preventDefault();
    setMetric("fahrengate");
  }
  function showCel(event) {
    event.preventDefault();
    setMetric("celsius");
  }
  function temperatureInFar() {
    return Math.round(props.temperature * 1.8 + 32);
  }

  if (metric === "celsius") {
    return (
      <div className="city-temperature">
        <div className="curent-city">
          <span className="city-name">{props.city} </span>
          <span className="curent-temperature">
            <span> {props.temperature}</span>
            <span className="units selectUnit"> °C | </span>
            <span className="units">
              <a href="/" onClick={showFar}>
                F
              </a>{" "}
            </span>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="city-temperature">
        <div className="curent-city">
          <span className="city-name">{props.city} </span>
          <span className="curent-temperature">
            <span> {temperatureInFar()}</span>
            <span className="units selectUnit"> °F | </span>
            <span className="units">
              <a href="/" onClick={showCel}>
                C
              </a>{" "}
            </span>
          </span>
        </div>
      </div>
    );
  }
}
