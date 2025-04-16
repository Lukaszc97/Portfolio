import React, { useEffect, useState } from "react";
import "./List.css";  

const List = () => {
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem("list");
    return savedList ? JSON.parse(savedList) : [];  
  });
  
  const [message, setMessage] = useState("");

  const handlelist = () => {
    if (message.trim() !== "") {
      const newList = [...list, message];  // Stwórz nową listę z dodanym elementem
      setList(newList);  // Zaktualizuj stan
      setMessage("");    // Wyczyść pole tekstowe
      localStorage.setItem("list", JSON.stringify(newList));
    }
  };

  const deleteItem = (index) => {
    const newList = list.filter((item, i) => i !== index); // Usuwamy element na podstawie indeksu
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));  // Zapisz zmodyfikowaną listę do localStorage
  };
const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    handlelist();
  }
};
  return (
    <div className="list-container">
      <input
        type="text"
        className="input-field"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="add-button" onClick={handlelist}>
        Dodaj do listy
      </button>

      <ul className="ul-list">
        {list.map((item, index) => (
          <li key={index} className="li-item">
            {item}
            <button className="delete-button" onClick={() => deleteItem(index)}>
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
