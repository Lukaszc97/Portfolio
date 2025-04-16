import React, { useReducer, useState, useEffect } from "react";
import "./Story.css";
import StoryData from "./storyData";
import items from "./items";
import BackButton from "../../../../../../components/BackButton";

// Inicjalny stan gry
const initialState = {
  currentNode: "start",
  equippedItems: {
    armor: null,
    weapon: null,
  },
  inventory: [],
  health: 100,
  attack: 2,
};

// Funkcja reduktora
function gameReducer(state, action) {
  switch (action.type) {
    case "MOVE":
      return {
        ...state,
        currentNode: action.payload.next,
      };
    case "ADD_ITEM":
      return {
        ...state,
        inventory: [...state.inventory, action.payload],
      };
    case "EQUIP_ITEM":
      return {
        ...state,
        inventory: state.inventory.filter(item => item !== action.payload),
        equippedItems: {
          ...state.equippedItems,
          [action.itemType]: action.payload,
        },
      };
    case "UNEQUIP_ITEM":
      return {
        ...state,
        inventory: [...state.inventory, action.payload],
        equippedItems: {
          ...state.equippedItems,
          [action.itemType]: null,
        },
      };
    case "CHANGE_HEALTH":
      return {
        ...state,
        health: Math.max(0, state.health + action.payload),
      };
    case "GAME_RESET":
      return { ...initialState };
    default:
      return state;
  }
}

// Funkcja obliczająca statystyki
const calculateStats = (inventory, equippedItems, baseStats) => {
  let stats = { ...baseStats };

  // Bonusy z ekwipunku
  inventory.forEach(itemId => {
    const item = items[itemId];
    if (item) {
      stats.attack += item.attackBonus || 0;
      stats.health += item.healthBonus || 0;
    }
  });

  // Bonusy z założonych przedmiotów
  Object.values(equippedItems).forEach(itemId => {
    if (itemId) {
      const item = items[itemId];
      if (item) {
        stats.attack += item.attackBonus || 0;
        stats.health += item.healthBonus || 0;
      }
    }
  });

  return stats;
};

const Story = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [error, setError] = useState(null);
  const [deathMessage, setDeathMessage] = useState(null);

  const scene = StoryData[state.currentNode];
  const currentStats = calculateStats(state.inventory, state.equippedItems, {
    health: state.health,
    attack: state.attack,
  });

  useEffect(() => {
    if (state.health <= 0) {
      setDeathMessage("UMARŁEŚ");
    }
  }, [state.health]);

  const handleChoice = (option) => {
    if (!scene?.options?.length) {
      setError("Historia zakończona lub nie ma dostępnych opcji!");
      return;
    }

    if (option.item) {
      dispatch({ type: "ADD_ITEM", payload: option.item });
    }

    if (option.health) {
      dispatch({ type: "CHANGE_HEALTH", payload: option.health });
    }

    if (!StoryData[option.next]) {
      setError("Nie ma dalszej części historii!");
      return;
    }

    dispatch({ type: "MOVE", payload: { next: option.next } });
  };

  const gameReset = () => {
    dispatch({ type: "GAME_RESET" });
    setDeathMessage(null);
    setError(null);
  };

  if (!scene) {
    return (
      <div className="error-container">
        <p>Wystąpił problem: Brak dostępnej sceny.</p>
      </div>
    );
  }

  return (
    <div className="story-container">
      <BackButton/>
      

      <div className="equipment-panel">
        <div className="equipped-items">
          <h3>Założone przedmioty:</h3>
          <p>Zbroja: {state.equippedItems.armor || "brak"}</p>
          <p>Broń: {state.equippedItems.weapon || "brak"}</p>
          {state.equippedItems.armor && (
            <button onClick={() => dispatch({
              type: "UNEQUIP_ITEM",
              payload: state.equippedItems.armor,
              itemType: "armor"
            })}>
              Zdejmij zbroję
            </button>
          )}
          {state.equippedItems.weapon && (
            <button onClick={() => dispatch({
              type: "UNEQUIP_ITEM",
              payload: state.equippedItems.weapon,
              itemType: "weapon"
            })}>
              Zdejmij broń
            </button>
          )}
        </div>

        <div className="inventory">
          <h3>Ekwipunek:</h3>
          {state.inventory.length > 0 ? (
            state.inventory.map(item => (
              <div key={item} className="inventory-item">
                {items[item]?.name || item}
                {items[item]?.type && (
                  <button onClick={() => dispatch({
                    type: "EQUIP_ITEM",
                    payload: item,
                    itemType: items[item].type
                  })}>
                    Załóż
                  </button>
                )}
              </div>
            ))
          ) : (
            <p>Ekwipunek jest pusty</p>
          )}
        </div>
      </div>

      <div className="info-bar">
        <span><strong>Życie:</strong> {state.health}</span>
        <span><strong>Atak:</strong> {currentStats.attack}</span>
      </div>
      {error && <div className="error-message">{error}</div>}
      <p>{deathMessage || scene.text}</p>
      <div className="options">
        {scene.options?.map((option, idx) => (
          <button key={idx} onClick={() => handleChoice(option)}>
            {option.text}
          </button>
        ))}
      </div>

      <button onClick={gameReset} className="reset-button">
        Reset gry
      </button>
    </div>
  );
};

export default Story;