import React from "react";
import amount from "../amount/amount.css";

function Amount() {
  return (
    <div>
      <div className="curent-amount">
        <h3>1,456,784 Rwf</h3>
        <p>14 feb 2020-Nov</p>
      </div>

      <div>
        <button className="expense-button">EXPENSE</button>
        <button className="income-button">INCOME</button>
      </div>
    </div>
  );
}

export default Amount;
