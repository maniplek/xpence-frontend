import React from "react";

function AllAccounts() {
  return (
    <div>
      <div>
        <h3>All Accounts</h3>
        <div>
          <ul>
            <li>
              from <input type="calendar"></input>
            </li>
            <li>
              To <input type="calendar"></input>
            </li>
            <li>Filter</li>
            <li>
              Yearly
              <select>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
              </select>
            </li>
            <li>from</li>
          </ul>
        </div>
        <div>
          <h2>1,456,748 Rwf</h2>
          <h4>14 Feb 2020 - Nov</h4>
        </div>
        <div>
          <button>EXPENSE</button>
          <button>iNCOME</button>
        </div>
        <div>
          <h3>EXPENSES VS INCOME</h3>
        </div>
        <div>
          <h3>EXPENSES</h3>
        </div>
        <div>
            <ul>
                <li>FOOD </li>
                <li>TRANSPORT </li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default AllAccounts;
