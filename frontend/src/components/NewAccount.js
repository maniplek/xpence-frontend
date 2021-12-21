import React from "react";

function NewAccount() {
  return (
    <div>
      <h3>New Account</h3>
      <p>Create an income/expence acount to start recording. </p>
      <p>You can create up to 5 accounts.</p>

      <form action="">
        <div>
          <label for="name">name</label>
          <br />
          <input type="text" name="name" placeholder="Acount Name" />
        </div>
        <div>
          <label for="currency">Currency</label>
          <br />
          <select name="devices">
            <option value="">Set default currency</option>
            <option value="usd">USD</option>
            <option value="rwf">RWF</option>
            <option value="dinali">DINALI</option>
          </select>
        </div>
        <div>
            <button>ADD ACCOUNT</button>
        </div>
      </form>
    </div>
  );
}

export default NewAccount;
