//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let microseconds = 0;
let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

setInterval(() => {

    microseconds++;

    if (microseconds > 9) {
        miliseconds++;
        microseconds =0;
    }
    if (miliseconds > 9) {
        seconds++;
        miliseconds =0;
    }
    if (seconds > 9) {
        minutes++;
        seconds =0;
    }
    if (minutes > 9) {
        hours++;
        minutes =0;
    }
    if (hours > 9) {
        days++;
        hours =0;
    }

//render your react application
ReactDOM.render(<Home
    microseconds={microseconds}
    miliseconds ={miliseconds}
    seconds={seconds}
    minutes={minutes}
    hours={hours}
    days={days}
    />, document.querySelector("#app"));
},1000)