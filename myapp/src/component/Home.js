// Home.js
import React from 'react';
import "./home.css"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
     
     <div>
     \
     </div>
      {/* Hero Start */}
      <div className="hero-header" id="home">
        <div className="container">
          <div className="content">
            <h1>Welcome to Online Mental Health Platform</h1>
            <p className="p1">
              The Best Mental Health Care Solution In Your City, <br /><br/>
              With affordable and budget-friendly prices for medical attention
            </p>
            <div className="links">
              <Link to='/service'>
                Find a Doctor
              </Link>
              <Link to='/service'>
                Appointment
              </Link>
            </div>
            <div className="hero-section"></div>
          </div>
          <div className="hero">
            <img src="img/team-1.jpg" alt="" className="hero-img" />
          </div>
        </div>
      </div>
      {/* Hero End */}

      <div className="content-2">
        <div className="next">
         <Link to='/about'>
            Next Page<i className="fa fa-solid fa-bounce fa-arrow-right"></i>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
