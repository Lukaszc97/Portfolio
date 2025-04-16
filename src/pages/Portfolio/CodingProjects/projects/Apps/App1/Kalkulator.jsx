import React, { useEffect, useState } from "react";
import "./Kalkulator.css";  
import BackButton from "../../../../../../components/BackButton";

const Kalkulator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput(input + value);

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Błąd");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="kalkulator">
      <BackButton/>
      <h2>KALKULATOR</h2>

      <div className="display">
        <input
          type="text"
          value={input}
          readOnly
          className="input-display"
        />
      </div>

      <div className="buttons">
        <button onClick={() => handleClick("7")}><span>7</span></button>
        <button onClick={() => handleClick("8")}><span>8</span></button>
        <button onClick={() => handleClick("9")}><span>9</span></button>
        <button onClick={() => handleClick("/")}><span>/</span></button>
        <button onClick={() => handleClick("4")}><span>4</span></button>
        <button onClick={() => handleClick("5")}><span>5</span></button>
        <button onClick={() => handleClick("6")}><span>6</span></button>
        <button onClick={() => handleClick("*")}><span>*</span></button>
        <button onClick={() => handleClick("1")}><span>1</span></button>
        <button onClick={() => handleClick("2")}><span>2</span></button>
        <button onClick={() => handleClick("3")}><span>3</span></button>
        <button onClick={() => handleClick("-")}><span>-</span></button>
        <button onClick={() => handleClick("00")}><span>00</span></button>
        <button onClick={() => handleClick("0")}><span>0</span></button>
        <button onClick={() => handleClick(".")}><span>.</span></button>
        <button onClick={() => handleClick("+")}><span>+</span></button>
        <button onClick={handleCalculate}><span>=</span></button>
        <button onClick={handleClear}><span>C</span></button>
      </div>
    </div>
  );
};

export default Kalkulator;
