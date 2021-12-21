import React from "react";

function NewExpense() {
  return (
    <div>
      <h3>New Expense</h3>
      <form>
        <div>
          <label>Amount</label>
          <br />
          <input type="text" placeholder="Enter the amount" />
        </div>
        <div>
          <label>Category</label>
          <br />
          <select name="" id="">
            <option value="">Choose Category</option>
            <option value="FOOD">FOOD</option>
            <option value="Hangout">COMMUNICATION</option>
            <option value="Airtime">ENTERTAINMENT</option>
            <option value="TRANSPORT">TRANSPORT</option>
            <option value="GYM">HANGOUT</option>
          </select>
        </div>
        <div>
          <label>Description</label>
          <br />
          <textarea name="decription" id="" cols="30" rows="10" placeholder='Tell us more'></textarea>
        </div>
        <div>
            <button>ADD EXPENSE</button>
        </div>
      </form>
    </div>
  );
}

export default NewExpense;
