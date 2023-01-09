import React from "react";
//import "./css/CurentData.css";

export default function CurentData() {
  return (
    <div className="about-day">
      <div className="about-day__list">
        <p>
          <span className="header-day" id="dayOftheWeek">
            Sunday
          </span>
        </p>
        <p id="corentDate">23.10.2022</p>
        <p id="curentTime">13:35</p>
      </div>
    </div>
  );
}
