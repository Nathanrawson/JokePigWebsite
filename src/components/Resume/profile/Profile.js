import React from 'react';
import SectionHeader from '.././SectionHeader';
import './profileCss.css'

const Profile = (props) => {
    console.log(props);
    return (<div>
        <SectionHeader h1="About Pig Cult" h3="A Porkington stanley" />
        <div>{props.aboutContent}</div>
        {/* <div id="profileImage"></div>
        <div id="AboutMeDiv">  <h2>About me</h2>

        </div> */}</div>
    )
}

export default Profile;