import React from "react";
import sidebar from "../sidebar/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <p id='side-title'>MY ACCOUNTS</p> 
        {/* icon */}
      </div>
      <div>
        <ul>
          <li className="all-account">All Accounts</li>
          <li className="mobileMoney">Mobile Money</li>
          <li className="Equity">Equity Bank</li>
          <li className="cash">Cash</li>
        </ul>
      </div>

      <div>
        <hr></hr>
      </div>

      <div>
        <ul>
          <li className="preference">Preferences</li>
          <li className="myProfile">My profile</li>
        </ul>
      </div>

      <div>
        <hr></hr>
      </div>

      <div className="logout">
        <a href="Logout">Logout</a>
      </div>
      

    </div>
  );
}

export default Sidebar;
