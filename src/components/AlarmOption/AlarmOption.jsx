import React from "react";
import './AlarmOption.css'

function AlarmOption() {
  return (
    <div className="option-Container">
      <div className="wrapper-option">
        <select>
          <option value="hour">hour</option>
        </select>
        <select>
          <option value="minutes">minutes</option>
        </select>
        <select>
          <option value="Am-Pm">Am/Pm</option>
        </select>
      </div>
      <button className="setAlarm-btn">Set Alarm</button>
    </div>
  );
}

export default AlarmOption;
