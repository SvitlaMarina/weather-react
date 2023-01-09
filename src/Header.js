import React from "react";
import CurentData from "./CurentData";
import EnterCity from "./EnterCity";

//import "./css/Header.css";

export default function Header() {
  return (
    <div className="header">
      <CurentData />
      <EnterCity />
    </div>
  );
}
