import React, { useEffect, useState } from "react";
import "./GraNaCzekanie.css";  

import BackButton from "../../../../../../components/BackButton";
const GraNaCzekanie = () => {
  const [seconds, setSeconds] = useState(0);  
  const [isRunning, setIsRunning] = useState(false);  

  // Funkcja uruchamiająca timer
  const startTimer = () => {
    setSeconds(0);
    setIsRunning(true);
  };

  // Funkcja zatrzymująca timer
  const stopTimer = () => {
    setIsRunning(false);
  };

  // Hook do zarządzania interwałem
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000); 
    } else {
      clearInterval(interval);
    }

    // Czyszczenie interwału, gdy komponent się odmontuje
    return () => clearInterval(interval);
  }, [isRunning]); 

const formatSekundy = (count) => {
  if (count === 1) return "sekunda";
  if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
    return "sekundy";
  }
  return "sekund";
};


  return (
    <div className="gra-na-czekanie">
      <BackButton />
      <h2>Gra Na Czekanie</h2>
      <p>
        Ta gra jest na razie w fazie oczekiwania na dalszy rozwój! Kliknij na
        przycisk i czekaj! Kiedy zmęczysz się czekaniem, kliknij przycisk
        ponownie i zobacz jak długo wyczekałeś! :D
      </p>
      <h3>
        {isRunning ? <div className="timer-ring visible"></div> : <div>GRATULACJE! WYTRZYMAŁEŚ: {seconds}{" "}
        {formatSekundy(seconds)} <br /></div>}
        {isRunning ? [] : "Dasz radę pobić swój rekord? :P"}
      </h3>

      <button
        className="start-button"
        onClick={() => (isRunning ? stopTimer() : startTimer())}
      >
        {isRunning ? "Zatrzymaj" : "Start"} Timer
      </button>
    </div>
  );
};

export default GraNaCzekanie;
