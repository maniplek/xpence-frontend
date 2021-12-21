import React from "react";
import Navbar from "./Navbar";

function Preference() {
  return (
    <div>
      <Navbar />
      <div>
        <h3>GENRAL</h3>
        <h3>CATEGORIES</h3>
      </div>
      <form action="">
        <h1>Preferences </h1>
        <div>
          <label for="monthly-limit">Monthly Limit</label>
          <br />
          <input type="text" placeholder="Set monthly Limit" />
        </div>
        <div>
          <label for="Defoult-Currency">Defoult Currency</label>
          <br />
          <select name="devices">
            <option value="">Set default currency</option>
            <option value="usd">USD</option>
            <option value="rwf">RWF</option>
            <option value="dinali">DINALI</option>
          </select>
        </div>
        <div>
          <input type="checkbox" />
          Keep me logged In
        </div>
        <button>Save</button>
      </form>
    </div>
  );
}

export default Preference;
