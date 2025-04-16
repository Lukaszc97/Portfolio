import React, { useState } from "react";
import "./GraNaCzekanie3.css";

import BackButton from "../../../../../../components/BackButton";
const GraNaCzekanie3 = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0); // Liczba prób
  const [level, setLevel] = useState("łatwy");
  const [gameStarted, setGameStarted] = useState(false);
  const [secret, setSecret] = useState(
    () => Math.floor(Math.random() * 10) + 1
  );
  const [gameFinished, setGameFinished] = useState(false);

  // Tablica losowych komunikatów
  const randomMessages = [
    "Niestety nie trafiłeś :/ Spróbuj jeszcze raz",
    "Ooo, blisko, ale nie tym razem!",
    "Prawie! Spróbuj ponownie!",
    "Hmm, chyba nie tym razem. Próbuj dalej!",
    "Nie poddawaj się! Wciąż masz szansę!",
    "To nie to! Ale nie martw się, następna próba!",
    "Może następnym razem? Spróbuj jeszcze raz!",
    "Niezła próba, ale to nie ta liczba!",
    "Och, prawie! Jedna próba więcej!",
    "Ups, nie tym razem! Ale nie ma się co zrażać!",
    "Twoja liczba poszła gdzieś indziej... zgadnij inną!",
    "Nie, ale lubię Twoją determinację!",
    "Jeszcze nie teraz, ale już jesteś na dobrej drodze!",
    "Ta liczba się świetnie chowa... spróbuj ją znaleźć!",
    "Nie trafione, zatopione... ale gra trwa dalej!",
    "Jeszcze kilka prób i złamiesz system!",
    "Gdzieś w pobliżu... czuję to w kościach!",
    "Blisko, ale komputer się jeszcze nie poddał!",
    "Gdybyś trafił, to byłoby zbyt łatwe, prawda?",
    "Zły trop... ale nie trać wiary!",
    "Hmm... może pomyśl jak liczba?",
    "Nie, ale Twój upór jest imponujący!",
    "Jeszcze nie... ale idziesz w dobrą stronę!",
    "To nie to, ale nie poddawaj się!",
    "To była odważna próba, ale nieudana :(",
    "Oj nie, ale Twój styl zgadywania – pierwsza klasa!",
    "Masz już prawie, prawie... tylko nie teraz.",
    "To była jakaś liczba... ale nie TA.",
    "Jeszcze jeden strzał! Czuję, że się uda!",
    "Nie trafiłeś... ale kto by liczył próby? Oprócz mnie.",
    "Ta liczba lubi się ukrywać. Spróbuj raz jeszcze!",
    "Liczba nadal się śmieje. Trafisz ją następnym razem?",
    "Blisko... może nawet bardzo. Ale nie dość!",
    "Zgaduj dalej! Szczęście sprzyja wytrwałym!",
    "Zła liczba, ale dobre podejście!",
    "Nie tym razem. Ale kto wie, co przyniesie kolejna próba?",
    "To nie to... ale przyznaj – masz fun!",
    "Wojowniku cyfrowy, ta bitwa jeszcze trwa!",
    "Nie zgadłeś, ale zyskałeś doświadczenie!",
    "Jeszcze nie... ale robi się ciekawie!",
    "To była próba numer...? Kto by liczył! Leć dalej!",
  ];

  const handleLevelClick = (selectedLevel) => {
    setLevel(selectedLevel);
    setGameStarted(true);
    setAttempts(0); // Rozpocznij grę po wybraniu poziomu
    setGameFinished(false);

    let maxRange;
    switch (selectedLevel) {
      case "łatwy":
        maxRange = 10;
        break;
      case "średni":
        maxRange = 100;
        break;
      case "trudny":
        maxRange = 1000;
        break;
      case "potworny":
        maxRange = 10000;
        break;
      case "niemożliwy":
        maxRange = 1000000;
        break;
      default:
        maxRange = 10;
        break;
    }

    // Losowanie liczby secret po każdym wybraniu poziomu
    setSecret(Math.floor(Math.random() * maxRange) + 1);
  };

  const handleGuess = () => {
    const guess = parseInt(value); // Liczba po konwersji

    // Sprawdzenie, czy użytkownik nic nie wpisał
    if (!value.trim()) {
      setMessage("Nic nie wpisałeś :<");
      return;
    }

    // Sprawdzenie, czy liczba jest w odpowiednim zakresie
    if (isNaN(guess)) {
      setMessage("Liczba... nie litera... >:(");
      return;
    }

    const maxRange =
      level === "łatwy"
        ? 10
        : level === "średni"
        ? 100
        : level === "trudny"
        ? 1000
        : level === "potworny"
        ? 10000
        : level === "niemożliwy"
        ? 1000000
        : 10;

    if (guess < 1 || guess > maxRange) {
      setMessage(`OD 1 DO ${maxRange}!!!!!! >:(`);
      return;
    }

    setAttempts(attempts + 1);

    if (guess === secret) {
     setMessage(`ZGADŁEŚ (${secret})!!! Po ${attempts + 1} ${odmienPróby(attempts + 1)}!`);


      setGameFinished(true); // Gra została zakończona
    } else {
      const randomIndex = Math.floor(Math.random() * randomMessages.length);
      setMessage(randomMessages[randomIndex]);
    }

    setValue("");
  };

  const handlePlayAgain = () => {
    setGameFinished(false); // Ustawiamy stan, że gra się skończyła
    setValue(""); // Czyścimy pole wejściowe
    setAttempts(0); // Resetujemy liczbę prób
    setMessage(""); // Resetujemy komunikat
    setSecret(null); // Resetujemy sekret
    setGameStarted(false);
    handleLevelClick(level);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleGuess();
    }
  };
  const odmienPróby = (n) => {
    if (n === 1) return "próbie";
    if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
      return "próbach";
    }
    return "próbach";
  };
  return (
    <div className="game3-container">
      <BackButton />
      <h2>
        Wybierz poziom trudności i zgadnij liczbę! Za każdym razem jest inna ^^
      </h2>
      <div>
        <h2>Wybierz poziom trudności:</h2>
        <div className="level_button">
          <button
            className={`level-btn ${level === "łatwy" ? "active" : ""}`}
            onClick={() => handleLevelClick("łatwy")}
          >
            Łatwy <br /> (1-10)
          </button>
          <button
            className={`level-btn ${level === "średni" ? "active" : ""}`}
            onClick={() => handleLevelClick("średni")}
          >
            Średni <br /> (1-100)
          </button>
          <button
            className={`level-btn ${level === "trudny" ? "active" : ""}`}
            onClick={() => handleLevelClick("trudny")}
          >
            Trudny <br /> (1-1000)
          </button>
          <button
            className={`level-btn ${level === "potworny" ? "active" : ""}`}
            onClick={() => handleLevelClick("potworny")}
          >
            Potworny
            <br /> (1-10000)
          </button>
          <button
            className={`level-btn ${level === "niemożliwy" ? "active" : ""}`}
            onClick={() => handleLevelClick("niemożliwy")}
          >
            Niemożliwy
            <br /> (1-1000000)
          </button>
        </div>
      </div>

      {gameFinished ? (
        <div>
          <button className="reset-button" onClick={handlePlayAgain}>
            CHCĘ JESZCZE RAZ!
          </button>
        </div>
      ) : (
        <>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={`Podaj liczbę od 1 do ${
              level === "łatwy"
                ? 10
                : level === "średni"
                ? 100
                : level === "trudny"
                ? 1000
                : level === "potworny"
                ? 10000
                : level === "niemożliwy"
                ? 1000000
                : 10
            }`}
            onKeyDown={handleKeyDown}
          />
          <button className="start-button" onClick={handleGuess}>
            Zgaduję!
          </button>
        </>
      )}

      <p>{message}</p>
    </div>
  );
};

export default GraNaCzekanie3;
