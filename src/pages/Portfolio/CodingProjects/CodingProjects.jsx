import React, { useEffect, onClick } from "react";
import "./CodingProjects.css";
import { Link } from "react-router-dom";
import BackButton from '../../../components/BackButton'; 

const CodingProject = () => {
  return (
    <div>
      <BackButton />

      <div className="coding-projects-page">
        <section className="intro-section">
          <h1 className="intro-title">Moje autorskie gry i aplikacje</h1>
          <p className="intro-description">
            W tym miejscu udostępniam stworzone przeze mnie gry i aplikacje
            napisane w JavaScript.
          </p>
        </section>

        <section className="categories-section">
          <Link to="/games">
            <div className="category-title">Gry</div>
          </Link>
          <Link to="/apps">
            <div className="category-title">Programy</div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default CodingProject;
