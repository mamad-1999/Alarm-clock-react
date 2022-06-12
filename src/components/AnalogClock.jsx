import React, { useState } from "react";

function AnalogClock() {
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const clock = () => {
    let date = new Date();

    let hh = date.getHours() * 30,
      mm = date.getMinutes() * 6,
      ss = date.getSeconds() * 6;

    setHour(`rotateZ(${hh + mm / 12}deg)`);
    setMinutes(`rotateZ(${mm}deg)`);
    setSeconds(`rotateZ(${ss}deg)`);
  };
  setInterval(clock, 1000);

  return (
    <div className="clock__circle">
      <span className="clock__twelve"></span>
      <span className="clock__three"></span>
      <span className="clock__six"></span>
      <span className="clock__nine"></span>

      <div className="clock__rounder"></div>
      <div
        className="clock__hour"
        style={{ transform: hour }}
        id="clock-hour"
      ></div>
      <div
        className="clock__minutes"
        style={{ transform: minutes }}
        id="clock-minutes"
      ></div>
      <div
        className="clock__seconds"
        style={{ transform: seconds }}
        id="clock-seconds"
      ></div>

      <div className="clock__theme">
        <i className="bx bxs-moon" id="theme-button"></i>
      </div>
    </div>
  );
}

export default AnalogClock;
