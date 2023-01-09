import React from "react";
//import "./css/EnterCity.css";
export default function EnterCity() {
  return (
    <div className="enter-city">
      <form className="enter-city" id="city-form">
        <div className="mb-1 mr-2 m-1">
          <input
            type="text"
            className="form-control border-info"
            id="cityName"
            placeholder="Enter you city"
          />
        </div>
        <input
          type="submit"
          className="btn btn-outline-primary border-info mb-2 m-1"
          id="submitCity"
          value="Search"
        />
        <button
          type="button"
          className="btn btn-outline-success border-info mb-2 m-1"
          id="enterCurentCity">
          Curent
        </button>
      </form>
    </div>
  );
}
