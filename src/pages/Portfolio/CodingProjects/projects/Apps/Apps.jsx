import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../../../components/BackButton"; 
import "./Apps.css";

const Apps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const loadApps = async () => {
      const appsModules = import.meta.glob(
        "/src/pages/Portfolio/CodingProjects/projects/Apps/*/index.js"
      );

      const appsList = await Promise.all(
        Object.keys(appsModules).map(async (path) => {
          const appsModule = await appsModules[path]();
          const { title, description, image } = appsModule.default;

          return { title, description, image, path };
        })
      );

      setApps(appsList);
    };

    loadApps();
  }, []);

  return (
    <div className="apps-container">
      <BackButton />
      {apps.length > 0 ? (
        apps.map((app, index) => (
          <Link
            key={index}
            to={`/app/${app.title.toLowerCase().replace(/\s+/g, "")}`}
            style={{ textDecoration: "none" }}
          >
            <div className="app-card">
              <h3>{app.title}</h3>
              <p>{app.description}</p>
              {app.image && <img src={app.image} alt={app.title} />}
            </div>
          </Link>
        ))
      ) : (
        <p>Brak aplikacji do wyświetlenia.</p>
      )}
    </div>
  );
};

export default Apps;
