import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
import preference from '../Preference/preference.css';


function Preference() {
  return (
    <div>
      {/* <Navbar /> */}

      <form action="">
<div className="back">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 " stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
</svg>
</div>
      <ul className="title-preference">
        <li className="general">GENRAL</li>
        <li><Link to='/PrefCategolies' className="category">CATEGORIES</Link></li>
      </ul>
      <hr></hr>
        <h1 id='pref'>Preferences </h1>
        <div>
          <label for="monthly-limit" id="name">Monthly Limit</label>
          <br />
          <input type="text" id='input-field' placeholder="Set monthly Limit" />
        </div>
        <div>
          <label for="Defoult-Currency"id="name">Defoult Currency</label>
          <br />
          <select name="devices" id='input-field'>
            <option value="">Set default currency</option>
            <option value="usd">USD</option>
            <option value="rwf">RWF</option>
          </select>
        </div>
        <hr></hr>
        <br></br>
        <div className="">
        
        <input type="checkbox" name="checkBox1" className="checkbx"/>keep me logged in
    {/* <label><input type="checkbox" id="topping" name="keepme" value="keepme" />Keep me logged in</label> */}
  </div>
  <br />

        <button id="bttn">Save</button>
      </form>
      
    </div>
  );
}

export default Preference;
