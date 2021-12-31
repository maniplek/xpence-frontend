import React from 'react'
import img from '../../assets/XPENCE.svg';
import pic from '../../assets/Capture.jpeg';
import mainNavbar from '../shared/mainNavbar.css';

function MainNavbar() {
    return (
        <div className='navbar'>
            
                  
                  <ul>
                      <li><img src={img} alt="logo"></img></li>
                      <li id='pic'>
                          <img src={pic} alt="logo" className='image-profile-pic'></img>
                        </li>
                      <li id='name-owner'>name</li>
                  </ul>
        </div>
        
        
    )
}

export default MainNavbar
