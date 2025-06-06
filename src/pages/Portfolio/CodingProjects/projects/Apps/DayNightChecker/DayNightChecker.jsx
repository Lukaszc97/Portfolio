import React, { useState } from "react";
import "./DayNightChecker.css";
import BackButton from "../../../../../../components/BackButton";

const DayNightChecker = () => {
  const [light, setLight] = useState("");
  const [rain, setRain] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (!light || !rain) {
      setMessage("Wybierz obie opcje zanim klikniesz!");
      return;
    }

    let msg = "Wygląda na to, że ";

    if (light === "jasno") {
      msg += "jest dzień";
    } else {
      msg += "jest noc";
    }

    if (rain === "pada deszcz") {
      msg += " i pada deszcz 🌧️.";
      
    }
    else if (rain === "pada śnieg") {
      msg += " i pada śnieg 🌨️.";
      
    }
    
    else {
      msg += " i nie pada ☀️.";
    }

    setMessage(msg);
  };

  return (
    <div className="day-night-container">
      <BackButton></BackButton>
      <h2>Sprawdź pogodę i porę dnia 🌦️</h2>

      <label>
        <p>Jest jasno czy ciemno?</p>
        <select value={light} onChange={(e) => setLight(e.target.value)}>
          <option value="">-- wybierz opcję --</option>
          <option value="jasno">Jest jasno</option>
          <option value="ciemno">Jest ciemno</option>
        </select>
      </label>

      <br /><br />

      <label>
        <p>Pada czy nie pada?</p>
        <select value={rain} onChange={(e) => setRain(e.target.value)}>
          <option value="">-- wybierz opcję --</option>
          <option value="pada deszcz">Pada deszcz</option>
          <option value="pada śnieg">Pada śnieg</option>
          <option value="niepada">Nie pada</option>
        </select>
      </label>

      <br /><br />
      <button className="start-button" onClick={handleClick}>Sprawdź!</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default DayNightChecker;
