import React from "react";
import table from '../table/table.css';
import edit from '../../../assets/edit.svg'
import close from '../../../assets/close.svg';

function Table() {
  return (
    <div className="table-content">
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>.</th>
            <td>-500,000 Rwf</td>
            <td>14 Feb 2021</td>
            <td id="category">FOOD</td>
            <td>Boy's night at Marriott Hotel Kigali</td>
            <td> <img className="edit" src={edit} alt="" /></td>
            <td ><img className="close" src={close} alt="" /></td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default Table;
