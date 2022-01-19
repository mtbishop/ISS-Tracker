import React from "react";
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';

const HomePage = () => {
  return (
    <div className="container homepage">
      <div className="card">
        <div className="people" />
        <Link to="/astronauts">
          Astronauts
        </Link>
      </div>
      <div className="card">
        <div className="tracker" />
        <Link to="/tracker">
          Tracker
        </Link>
      </div>
      <ParticleBackground />
    </div>
  );
};

export default HomePage;
