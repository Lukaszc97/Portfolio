import React, { useEffect, useState } from "react";
import "./Game5.css";  
import "../../../../../../components/BackButton";
import BackButton from "../../../../../../components/BackButton";
const Game5 = () => {
  const [counter, setCounter] = useState(0);
const [timer, setTimer] = useState(10);
const[message, setMessage] = useState("")
const[gameStarted, setGameStarted] = useState(false)
const [highScore, setHighScore] = useState(0);

////////najwyzszy wynik
useEffect(() => {
  const savedScore = localStorage.getItem("highScore");
  if (savedScore) {
    setHighScore(parseInt(savedScore));
  }
}, []);

///////////////////timer
useEffect(() => {
  if(gameStarted){
  const interval = setInterval(()=> {
    setTimer(prevTimer => {
      if(prevTimer <= 1) {
        clearInterval(interval);
        
        return 0;
    };
   
 
    
    return prevTimer -1;
  });
},1000);
  return () => clearInterval(interval);}
},[gameStarted]);

//////sprawdz najwyzszy wynik
useEffect(() => {
  if (timer === 0) {
    setMessage("Kliknąłeś " + counter + " razy w ciągu 10 sekund!");
    if (counter > highScore) {
      setHighScore(counter);
      localStorage.setItem("highScore", counter); // 📝 Zapisz do localStorage
    }
  }
}, [timer]);
/////////licznik
useEffect(()=>{
  if(timer===0){
    setMessage ("Kliknąłeś " + counter + " razy w ciągu 10 sekund!");
  }
},[timer])
  const handleCounter = () =>{
    if (!gameStarted) {  // Jeśli gra jeszcze nie wystartowała, to ją uruchamiamy
      setGameStarted(true);  // Uruchomienie gry
    }
    if(timer > 0){
      setCounter(prevCounter => prevCounter+1);
    }
  }


  ////////reset
const handleReset = () =>{
  setCounter(0);
  setTimer(10);
  setMessage();
  setGameStarted(false)
}
    
    
  return (
    <div className="game5-container">
      <BackButton/>
       <p>Najlepszy wynik: {highScore}</p>
      <p>{timer || message}</p>
      <p>{counter }</p>
  <div className="counter"></div>
  {timer > 0  ?
  <button className="start-button" onClick={handleCounter}>KLIKNIJ!</button> : <button className="reset-button" onClick={handleReset}>RESET</button> } 
  
    </div>
  );
};

export default Game5;
