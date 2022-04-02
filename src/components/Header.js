import React from 'react';
import IsAuthenitcated from '../auth/isAuthenticted';

const Header = (props) => {
const getAdminNav = () => {
  IsAuthenitcated().then((result) => {
    console.log(result)
    if(result)
    return (  <li onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })} className="nav-link">
            <span className="nav-btn"><a href='/contentManager'>Admin</a></span>
          </li>)})
}
  return (

    <div id={`${props.navId}`} className={props.navClass} > <nav id="resumeNavbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li onClick={() => document.getElementById('Profile').scrollIntoView({ behavior: 'smooth' })} className="nav-link">
            <span id="ProfileButton" className="nav-btn">About <span className="sr-only">(current)</span></span>
          </li>
          <li onClick={() => document.getElementById('Experiences').scrollIntoView({ behavior: 'smooth' })} className="nav-link">
            <span id="ExperiencesButton" className="nav-btn">Pig law</span>
          </li>
          <li onClick={() => document.getElementById('Abilities').scrollIntoView({ behavior: 'smooth' })} className="nav-link">
            <span id="AbilitiesButton" className="nav-btn">History</span>
          </li>
          <li onClick={() => document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' })} className="nav-link">
            <span id="ProjectsButton" className="nav-btn">Gallery</span>
          </li>
          <li onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })} className="nav-link">
            <span id="ContactButton" className="nav-btn">Contact</span>
          </li>
          { getAdminNav()}
        </ul>
      </div>
    </nav></div>
  );
};

export default Header;