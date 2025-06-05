import React from 'react';
import NavBarItem from './NavBarItem';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <NavBarItem to="/" text="Strona Główna" />
        <NavBarItem 
        to="/portfolio" 
        text="Portfolio" 
        subItems={[{ to: "/portfolio/biography", text: "O Mnie" },
          { to: "/portfolio/dance-gallery", text: "Galeria Taneczna" },
  /* { to: "/portfolio/coding-projects", text: "Projekty Kodowania" } */
        ]}/>
        <NavBarItem to="/contact" text="Kontakt" />
      </ul>
    </nav>
  );
};

export default NavBar;