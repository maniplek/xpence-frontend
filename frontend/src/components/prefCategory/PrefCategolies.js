import React from "react";
import edit from "../../assets/edit.svg";
import close from "../../assets/close.svg";
import PrefCategoly from "../prefCategory/prefCategory.css";
import { Link } from "react-router-dom";

function PrefCategolies() {
  return (
    <div>
      <form action="">
      <div className="back">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 " stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
</svg>
</div>
      <ul className="title-preference">
        <li><Link to='/Pref' id="general">GENERAL</Link></li>
        <li id="categor">CATEGORIES</li>
      </ul>
      <hr></hr>
     
        <ul id="menu-category">
            <li id="categories-number">10 Categories</li>
            <li>
              <button id="btnn">ADD CATEGORY</button>
            </li>
          </ul>
     

        <table >
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>FOOD</td>
              <td>Expense category</td>
              <td>
                {" "}
                <img className="edit" src={edit} alt="" />
              </td>
              <td>
                <img className="close" src={close} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default PrefCategolies;
