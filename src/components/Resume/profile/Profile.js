import React from 'react';
import SectionHeader from '.././SectionHeader';
import './profileCss.css'

const Profile = (props) => {
    console.log(props);

    const getHtml = () => {
        if(props.aboutContent != undefined){
            var myProp = props.aboutContent;
            return (<div className='danger-html' dangerouslySetInnerHTML={{__html: myProp }} />);
        }
    }
    return (<div>
        <SectionHeader h1="About Pig Cult" h3="A Porkington stanley" />
        {getHtml()}
        {/* <div id="profileImage"></div>
        <div id="AboutMeDiv">  <h2>About me</h2>

        </div> */}</div>
    )
}

export default Profile;