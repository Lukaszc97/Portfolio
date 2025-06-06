import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../../../components/BackButton"; 
import "./Games.css";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      const gameModules = import.meta.glob(
        "/src/pages/Portfolio/CodingProjects/projects/Games/*/index.{js,jsx}"
      );

      const gameList = await Promise.all(
        Object.keys(gameModules).map(async (path) => {
          const gameModule = await gameModules[path]();
          const { title, description, image } = gameModule.default;

          return { title, description, image, path };
        })
      );

      setGames(gameList);
    };

    loadGames();
  }, []);

  return (
    <div className="games-container">
      <BackButton />

      {games.length > 0 ? (
        games.map((game, index) => (
          <Link
            key={index}
            to={`/game/${game.title.toLowerCase().replace(/\s+/g, "")}`}
            style={{ textDecoration: "none" }}
          >
            <div className="game-card">
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              {game.image && <img src={game.image} alt={game.title} />}
            </div>
          </Link>
        ))
      ) : (
        <p>Brak gier do wyświetlenia.</p>
      )}
    </div>
  );
};

export default Games;
