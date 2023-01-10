import React from "react";
import "./css/CurentData.css";

export default function CurentData() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //відображення місяця
  let month = "";
  if (now.getMonth() < 9) month = `0${now.getMonth() + 1}`;
  else month = `${now.getMonth() + 1}`;
  //відображення хвилин
  let minutes;
  if (now.getMinutes() < 10) minutes = `0${now.getMinutes()}`;
  else minutes = now.getMinutes();
  return (
    <div className="about-day">
      <div className="about-day__list">
        <p>
          <span className="header-day" id="dayOftheWeek">
            {days[now.getDay()]}
          </span>
        </p>
        <p id="corentDate">
          {now.getDate()}.{month}.{now.getFullYear()}
        </p>
        <p id="curentTime">
          {now.getHours()}:{minutes}
        </p>
      </div>
    </div>
  );
}
