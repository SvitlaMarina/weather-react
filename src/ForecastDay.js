import React from "react";

export default function ForecastDay(props) {
  let temp = {
    max: Math.round(props.data.temperature.maximum),
    min: Math.round(props.data.temperature.minimum),
  };
  let icon = `${props.data.condition.icon_url}`;

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="card border-info mb-3">
      <div className="card-header">{day()}</div>
      <div className="card-body">
        <p className="card-img">
          <img src={icon} alt="weather in current city" />
        </p>{" "}
        <p className="card-text">
          <span className="max-temp">
            {temp.max}°{"  "} {"  "}{" "}
          </span>
          {"  "}
          <span className="min-temp"> {temp.min}°</span>{" "}
        </p>
      </div>
    </div>
  );
}
