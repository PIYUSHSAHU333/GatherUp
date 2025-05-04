import React from 'react';
import "./HamBurger.css"
function HamBurger({isOpen, onToggle}) {
    return (
        <>
 
 <input type="checkbox" id="checkbox" 
 checked={isOpen}  // Controlled by React state
 onChange={onToggle}  // Toggle the state when clicked
 />
    <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label>
        </>
      );
}

export default HamBurger;