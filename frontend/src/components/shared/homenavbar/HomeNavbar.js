import React from 'react';
import homeNavbar from '../homenavbar/HomeNavbar.css';
import  icon from '../../../assets/calendar.svg';


function HomeNavbar() {
    return (
        <div className='navbar'> 
                  <ul>
                     <li id='allAcount'> All Account</li>
                     <li>from<img src={icon}></img></li>
                     <li>TO<img src={icon}></img></li>
                     <li >
                         <label id='filter'>Filter</label>
                         <select name="" id="select-year">
                             <option value=''>Yearly</option>
                             <option value="2020">2020</option>
                             <option value="2021">2021</option>
                         </select>
                     </li>
                  </ul>
        </div>
        
        
    )
}

export default HomeNavbar
