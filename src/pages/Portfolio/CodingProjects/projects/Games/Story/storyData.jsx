import items from "./items";
import enemies from "./enemies";
const StoryData = {
  start: {
    text: "Witaj w grze! Wybierz swoją opcję.",
    options: [
      { text: "Idź do lasu", next: "forest", item: "iron_sword" },
      { text: "Idź do miasta", next: "city", item: null },
    ],
  },
  forest: {
    text: "W lesie spotykasz dziwne BANDYTE.",
    options: [
      { text: "Zaatakuj", next: "fight", item: null, health: -20,  },
      { text: "Uciekaj", next: "start", item: null },
    ],
  },
  fight: {
    text: "Rozpoczynasz walkę!",
    options: [
      { text: "Atakuj", next: "end", item: null, health: -20 }, // Zmiana zdrowia po walce
      { text: "Uciekaj", next: "start", item: null },
    ],
  },
  // Inne sceny...
};
export default StoryData;
