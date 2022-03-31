import React from 'react';
import SectionHeader from '../SectionHeader';
import './Experiences.css';
import ExperiencesSection from './ExperiencesSection';


const Experiences = (props) => {
const getHtml = () => {
    if(props.contentTwo != undefined){
        var myProp = props.contentTwo;
        return (<div className='danger-html' dangerouslySetInnerHTML={{__html: myProp }} />);
    }
}
    // const htmlDecode = (input) => {
    //     var e = document.createElement('div');
    //     e.innerHTML = input;
    //     return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    //   }

    return (<div className=""><SectionHeader h1="Pig Law" h3='“Don’t let yesterday take up too much of today.” – Will Rogers"' />
        <div className="experience-div">
            {getHtml()}
            {/* <h2 className="mobile-title">Education</h2>
            <ExperiencesSection qualififcation="MSC Advanced Computer Science" place="University Of Hertfordshire" date="Sep 2019-Sep 2020" content="The course far broadened my understanding in key computer science concepts in areas such as Data Science, Computational Algorithms and Paradigms, Neural Networks and Machine Learning and Legal and ethical issues associated with software development." />
            <ExperiencesSection qualififcation="BA Business Management (Economics)" place="University Of East London" date="Sep 2015-May 2018" content="Here I learned Key business concepts in areas such as Human Resources, Marketing, Corporate Finance, Economics, Accountancy, Supply Chain Management and many more." />
            <h2 className="mobile-title">Careers</h2>
            <ExperiencesSection qualififcation="Junior Software Developer" place="SPUD (Start Processing Useful Data)" date="Aug 2019-present" content="I currently work in Agile/scrum dev environment usually working with .Net and .Net core in an HTML, CSS, Javascript, C# and SQL stack hosted on Azure. Working for such an innovative start-up requires creating unique solutions to many unsolved problems within the construction industry." />
            <ExperiencesSection qualififcation="Help Desk Manager/ Software Tester" place="" date="Sep 2018-Sep 2019" content="My first role at SPUD briefly started as an Admin assistant where I quickly went on to testing the software and handling all customer Help Desk Calls. The role alongside my dedication to intensive online learning in web development would lead to my next role as a Junior software developer." />
            <ExperiencesSection qualififcation="Junior Accounts Manager" place="Gigstr" date="Jun 2018-Aug 2018" content="My Part-time role at Gigstr entailed on reaching out to businesses and showing them the Gigstr platform to increase the number of jobs available to Gigstrs (users). I did this through outbound calling, attending networking events and approaching businesses in person." />
            <ExperiencesSection qualififcation="International Recruitment Administrator" place="University of East London" date="March 2018-Aug 2018" content="My Placement as Recruitment Administrator consisted of creating marketing material to recruit students internationally, creating large data sets to assist in marketing decisions. The role also meant following up on admin tasks such as replying to emails, updating various databases and making sure that the data was organised." />
            <ExperiencesSection qualififcation="Market Research Assistant" place="Kudos Research" date="Mar 2017-Mar 2018" content="Here I worked Part-time in an outbound Call Centre conducting over the phone interviews." />
            <ExperiencesSection qualififcation="Customer Care Agent" place="Mears Care" date="Nov 2014-Aug 2017" content="An out of hours call centre to liaise between carers, family members and the service user. Also required monitoring carers attendance to service users and to make sure no service user was ever left unattended. Calls we would handle were varied and would range from checking a carers rota to calling an ambulance for a fallen service user." /> */}
        </div>
    </div>);
}

export default Experiences;