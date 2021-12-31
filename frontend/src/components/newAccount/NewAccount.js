import React from "react";
import newAcount from '../newAccount/newAcount.css'

function NewAccount() {
  return (
    <div className="NewAccount-page">



      <form action="">
      <h3 id="title">New Account</h3>
      <div className="sub-title">
      <h4>Create an income/expence acount to start recording. </h4>
      <h4>You can create up to 5 accounts.</h4>
      </div>
        <div>
          <label for="name"  id='input-name'>name</label>
          <br />
          <input type="text" name="name" id="input-field" placeholder="Acount Name" />
        </div>
        <div>
          <label for="currency" id='input-name'>Currency</label>
          <br />
          <select name="devices" id='choice'>
            <option value="">Choose Currency</option>
            <option value="usd">USD</option>
            <option value="rwf">RWF</option>
            <option value="dinali">DINALI</option>
          </select>
        </div>
        <br></br>
        <div>
            <button>ADD ACCOUNT</button>
        </div>
        <br></br>
      </form>
    </div>
  );
}

export default NewAccount;
