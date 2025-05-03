import React from 'react';
import Section from './Section';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
function LandingPage() {
    return ( 
        <div className="landing-page">
            <Section url="/media/images/gatherUp landing page.png"/>
            <Section2 url=""/>
            <Section3/>
            <Section4/>
        </div>
     );
}

export default LandingPage;