import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';

const HomePage = () => {

  const [hovered, setHovered] = useState("")

  const hoverHandle = (target) => {
    setHovered(target);
  }

  return (
    <div className="container homepage">
      <div className="card">
        <div key="people" className={`people ${hovered === "people" ? "hovered" : ""}`} />
        <Link onMouseLeave={() => setHovered("")} onMouseEnter={() => hoverHandle("people")} key="peopleLink" to="/astronauts">
          Astronauts
        </Link>
      </div>
      <div className="card">
        <div key="tracker" className={`tracker ${hovered === "tracker" ? "hovered" : ""}`} />
        <Link onMouseLeave={() => setHovered("")} onMouseEnter={() => hoverHandle("tracker")} key="trackerLink" to="/tracker">
          Tracker
        </Link>
      </div>
      <ParticleBackground />
    </div>
  );
};

export default HomePage;
