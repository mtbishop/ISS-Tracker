import React from "react";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return(
    <div className="container homepage">
       <div className="card">
         <div className="people" />
          <Link to="/people">
          People in Space
          </Link>
       </div>
       <div className="card">
         <div className="tracker" />
          <Link to="/tracker">
          Tracker
          </Link>
       </div>
    </div>
  );
};

export default HomePage;
