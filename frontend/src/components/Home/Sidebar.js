import React from "react";
import Navbar from "../Navbar";

function Sidebar() {
  return (
    <div>
      <Navbar />
      <div>
        <h3>MY ACCOUNT</h3>
      </div>
      <div>
        <ul>
          <li>All Acount</li>
          <li>Mobile Money</li>
          <li>Equity Bank</li>
          <li>Cash</li>
        </ul>
      </div>

      <div>
        <hr></hr>
      </div>

      <div>
        <ul>
          <li>Preferences</li>
          <li>My profile</li>
        </ul>
      </div>

      <div>
        <hr></hr>
      </div>

      <div>
        <a href="Logout"></a>
      </div>
      

    </div>
  );
}

export default Sidebar;
