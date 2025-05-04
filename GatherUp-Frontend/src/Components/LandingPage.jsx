import React from 'react';
import Section from './Section';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
function LandingPage() {
    return ( 
        <div className="landing-page !w-full !object-cover ">
            <Section/>
            <Section2 url="/media/images/gatherUp2.png"/>
            <Section3/>
            <Section4/>
        </div>
     );
}

export default LandingPage;