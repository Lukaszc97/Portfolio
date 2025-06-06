import React, { useState } from "react";
import "./WordCounter.css";  // Pamiętaj o zaimportowaniu pliku CSS
import BackButton from "../../../../../../components/BackButton";

const WordCounter = () => {
  const [text, setText] = useState("");
  const [letterCount, setLetterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  // Funkcja licząca słowa
  const countWords = (text) => {
    // Usuwamy nadmiarowe spacje na początku i końcu, a potem dzielimy tekst
    const words = text.trim().split(/\s+/);
    return words[0] === '' ? 0 : words.length;
  };

  // Funkcja licząca litery (usuwamy spacje i liczymy tylko znaki)
  const countLetters = (text) => {
    const letters = text.replace(/[^a-zA-Z]/g, ''); // Usuwamy wszystko, co nie jest literą
    return letters.length;
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setText(value);
    setWordCount(countWords(value)); // Zliczamy słowa
    setLetterCount(countLetters(value)); // Zliczamy litery
  };

  return (
    <div className="word-counter-container">
      <BackButton></BackButton>
      <h2>Licznik słów i liter</h2>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Wpisz swój tekst tutaj..."
        rows="6"
        cols="50"
      />
      <div className="word-count">
        <p>Liczba słów: {wordCount}</p>
        <p>Liczba liter: {letterCount}</p>
      </div>
    </div>
  );
};

export default WordCounter;
