import React from 'react'
import img from "../assets/XPENCE.svg";

function Navbar() {
    return (
        <div className='navbar'>
            <h4>NavBar</h4>
                  <img src={img} alt="logo"></img>
                  <div>
                      <h1>pic</h1>
                      <h1>name</h1>
                  </div>
        </div>
        
        
    )
}

export default Navbar
