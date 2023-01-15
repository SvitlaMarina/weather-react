//import axios from "axios";
import "./css/styles.css";
import CurentWeather from "./CurentWeather";
import Header from "./Header";
import Futter from "./Futter";
import "bootstrap/dist/css/bootstrap.css";
export default function App() {
  return (
    <div className="App">
      <Header />
      <CurentWeather />
      <Futter />
    </div>
  );
}
