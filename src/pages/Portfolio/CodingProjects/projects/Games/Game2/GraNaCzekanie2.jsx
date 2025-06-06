import React, { useState, useEffect } from "react";
import "./GraNaCzekanie2.css"
import "../../../../../../components/BackButton";
import BackButton from "../../../../../../components/BackButton";
const GraNaCzekanie2 = () => {
  const [seconds, setSeconds] = useState(0);  
  const [isRunning, setIsRunning] = useState(false);  
  const [hasStopped, setHasStopped] = useState(false); 
  const [startTime, setStartTime] = useState(null); 

  // Funkcja uruchamiająca timer
  const startTimer = () => {
    setSeconds(0); 
    setIsRunning(true); 
    setHasStopped(false); 
    setStartTime(performance.now()); 
  };

  // Funkcja zatrzymująca timer
  const stopTimer = () => {
    setIsRunning(false); 
    setHasStopped(true);
  };

  // Hook do zarządzania interwałem
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        const elapsed = (performance.now() - startTime) / 1000; 
        setSeconds(elapsed.toFixed(2)); 
      }, 10); // Co 10 ms
    } else {
      clearInterval(interval);
    }

    
    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  // Funkcja renderująca wiadomość w zależności od czasu
  const renderMessage = () => {
    if (hasStopped) { 
      const currentSeconds = parseFloat(seconds);
      if (currentSeconds === 10) {
        return "GRATULACJE, TRAFIŁEM 10-tke!";
      } else if (currentSeconds > 10) {
        return "Spóźniłeś się :/";
      } else {
        return "ZA WCZEŚNIE! :<";
      }
    }
    return ""; 
  };

  return (
    <div className="gra-na-czekanie">
      <BackButton />
      <h2>Gra Na Czekanie</h2>
      <p>
        Ta gra jest na razie w fazie oczekiwania na dalszy rozwój! Kliknij na
        przycisk i wyczekaj dokładnie 10 sekund, kliknij przycisk ponownie i
        zobacz czy trafiłeś! :D
      </p>
      <h3>
        {renderMessage()}
        {isRunning ? <div className="timer-ring visible"></div> : seconds}
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

export default GraNaCzekanie2;
