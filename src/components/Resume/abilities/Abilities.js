import React from 'react';
import SectionHeader from '../SectionHeader'
import AbilityBox from './AbilityBox';


const Abilities = (props) => { 
    const getHtml = () => {
        if(props.contentThree != undefined){
            var myProp = props.contentThree;
            return (<div className='danger-html' dangerouslySetInnerHTML={{__html: myProp }} />);
        }
    }
    return <div><SectionHeader h1="Pig History" h3='' />
        <div>
        {getHtml()}
            {/* <h2>Skills</h2>
            <AbilityBox Abilities={abilitiesArray1} />
            <AbilityBox Abilities={abilitiesArray2} />
            <hr />
            <h2>Tools</h2>
            <AbilityBox Abilities={abilitiesArray4} />
            <AbilityBox Abilities={abilitiesArray3} /> */}
        </div>
    </div>
}

export default Abilities