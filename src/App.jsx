import React from "react";
import './variables.css';
import './assets/css/common/Buttons.css';
import './assets/css/common/Forms.css';
import './assets/css/common/Links.css';
import './assets/css/common/Layout.css';
import './assets/css/common/Timer-Ring.css';

import './App.css';

import BackButton from './components/BackButton';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Biography from "./pages/Portfolio/Biography/Biography";
import DanceGallery from "./pages/Portfolio/DanceGallery/DanceGallery";
import CodingProject from "./pages/Portfolio/CodingProjects/CodingProjects";
import Games from "./pages/Portfolio/CodingProjects/projects/Games/Games";
import Contact from "./pages/Contact/Contact";
import GraNaCzekanie from "./pages/Portfolio/CodingProjects/projects/Games/Game1/GraNaCzekanie"; 
import GraNaCzekanie2 from "./pages/Portfolio/CodingProjects/projects/Games/Game2/GraNaCzekanie2"; 
import GraNaCzekanie3 from "./pages/Portfolio/CodingProjects/projects/Games/Game3/GraNaCzekanie3"; 
import GraNaCzekanie4 from "./pages/Portfolio/CodingProjects/projects/Games/Game4/GraNaCzekanie4"; 
import Game5 from "./pages/Portfolio/CodingProjects/projects/Games/Game5/Game5"; 
import Story from "./pages/Portfolio/CodingProjects/projects/Games/Story/Story/"; 

import Apps from "./pages/Portfolio/CodingProjects/projects/Apps/Apps";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Kalkulator from "./pages/Portfolio/CodingProjects/projects/Apps/App1/Kalkulator";
import WordCounter from "./pages/Portfolio/CodingProjects/projects/Apps/App2/WordCounter";
import DayNightChecker from "./pages/Portfolio/CodingProjects/projects/Apps/DayNightChecker/DayNightChecker";
import List from "./pages/Portfolio/CodingProjects/projects/Apps/List/List";




function App() {
  return (
    
    <Router basename="/Portfolio">
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/biography" element={<Biography />} />
            <Route path="/portfolio/dance-gallery" element={<DanceGallery />} />
            <Route path="/portfolio/coding-projects" element={<CodingProject />} />
            <Route path="games" element={<Games />} />
            <Route path="/game/granaczekanie" element={<GraNaCzekanie />} /> {}
            <Route path="/game/granaczekanie2" element={<GraNaCzekanie2 />} /> {}
            <Route path="/game/granaczekanie3" element={<GraNaCzekanie3 />} /> {}
            <Route path="/game/granaczekanie4" element={<GraNaCzekanie4 />} /> {}
            <Route path="/game/Klikacz" element={<Game5 />} /> {}
            <Route path="/game/story" element={<Story />} /> {}
            <Route path="apps" element={<Apps />}/>
            <Route path="/app/kalkulator" element={<Kalkulator />} /> {}
            <Route path="/app/WordCounter" element={<WordCounter />} /> {}
            <Route path="/app/DayNightChecker" element={<DayNightChecker />} /> {}
            <Route path="/app/List" element={<List />} /> {}
            <Route path="/contact" element={<Contact />} />
            <Route path="/backbutton" element={<BackButton />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
