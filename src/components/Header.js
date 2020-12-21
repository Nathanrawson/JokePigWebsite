import React from 'react';

const Header = (props) => {
  
    return (
      
    <div id={`${props.navId}`} className={props.navClass} > <nav id="resumeNavbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="navbar-collapse collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li onClick={() => document.getElementById('Profile').scrollIntoView({ behavior: 'smooth' })} className="nav-link">
          <span id="ProfileButton" className="nav-btn">Profile <span className="sr-only">(current)</span></span>
        </li>
        <li  onClick={() => document.getElementById('Experiences').scrollIntoView({ behavior: 'smooth' })} className="nav-link">
          <span id="ExperiencesButton" className="nav-btn">Experiences</span>
        </li>
        <li  onClick={() => document.getElementById('Abilities').scrollIntoView({ behavior: 'smooth' })} className="nav-link">
          <span id="AbilitiesButton" className="nav-btn">Abilities</span>
        </li>
        <li  onClick={() => document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' })} className="nav-link">
          <span id="ProjectsButton" className="nav-btn">Projects</span>
        </li>
        <li  onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })} className="nav-link">
          <span id="ContactButton" className="nav-btn">Contact</span>
        </li>
      </ul>
    </div>
  </nav></div>
    );
};

export default Header;