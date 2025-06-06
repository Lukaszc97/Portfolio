import React, { useState } from "react";
import "./GraNaCzekanie4.css";
import BackButton from "../../../../../../components/BackButton";

const GraNaCzekanie4 = () => {
  const [choice, setChoice] = useState("");
  const [message, setMessage] = useState("");
  const [select, setSelect] = useState("");

  const randomchoice = ["papier", "kamień", "nożyce"];

  const handleselectClick = (playerChoice) => {
    const randomIndex = Math.floor(Math.random() * randomchoice.length);
    const computerChoice = randomchoice[randomIndex];
    setSelect(playerChoice);
    setChoice(computerChoice);

    if (playerChoice === computerChoice) {
      setMessage("REMIS!");
    } else if (
      (playerChoice === "kamień" && computerChoice === "nożyce") ||
      (playerChoice === "papier" && computerChoice === "kamień") ||
      (playerChoice === "nożyce" && computerChoice === "papier")
    ) {
      setMessage("WYGRAŁEŚ");
    } else {
      setMessage("PRZEGRAŁEŚ");
    }
  };



  // Zmienna przechowująca klasę
  const resultClass =
    message === "WYGRAŁEŚ" ? "win" : message === "PRZEGRAŁEŚ" ? "lose" : "draw";

  // Logowanie klasy
  console.log("resultClass: ", resultClass);

  return (
    <div className="game4-container">
      <BackButton />
      <h2>Zagrajmy w papier, kamień, nożyce :D</h2>
      <h2>Co wybierasz?</h2>
      <div>
        <div className="select_button">
          <button
            className={`select-btn ${select === "papier" ? "active" : ""}`}
            onClick={() => handleselectClick("papier")}
          >
            PAPIER
          </button>
          <button
            className={`select-btn ${select === "kamień" ? "active" : ""}`}
            onClick={() => handleselectClick("kamień")}
          >
            KAMIEŃ
          </button>
          <button
            className={`select-btn ${select === "nożyce" ? "active" : ""}`}
            onClick={() => handleselectClick("nożyce")}
          >
            NOŻYCE
          </button>
        </div>
      </div>

      {/* Dodajemy dynamiczną klasę i logowanie */}
      <div className={`result ${resultClass}`}>
        <p>
          Twój wybór: <strong>{select}</strong>
        </p>
        <p>
          Komputer wybrał: <strong>{choice}</strong>
        </p>
        <p>
          <p>
            <strong className={resultClass}>{message}</strong>
          </p>
        </p>
      </div>
    </div>
  );
};

export default GraNaCzekanie4;
