import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import create_expenseAction from  '../../redux/actions/create_expenseAction';

function NewExpense() {


  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  const [category_expense, setCategory_expense] = useState('');
  const [decription, setDecription] = useState('');
  const [error, setError] = useState('');

  // const [users ,setUser] = useState([]);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await dispatch(create_expenseAction({amount, category_expense, decription}));
    // if(response === true) {
    //   window.location = '/login';
    // } else {
    //   setError('error signing up')
    // }
  }




  return (
    <div>

      <form action="" onSubmit={handleSubmit}>
      <h3>New Expense</h3>
        <div>
          <label>Amount</label>
          <br />
          <input 
          type="text" 
          name="amount" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter the amount" 
          />
        </div>
        <div>
          <label>Category</label>
          <br />
          <select 
          name="category-expense" 
          id=""
          value={category_expense}
          onChange={(e) => setCategory_expense(e.target.value)}
          >
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
          <textarea 
          name="decription" 
          id="" cols="30" rows="10" placeholder='Tell us more'
          value={decription}
          onChange={(e) => setDecription(e.target.value)}
          ></textarea>
        </div>
        <div>
            <button type="submit" id="btnbtn" onClick={handleSubmit}>ADD EXPENSE</button>
        </div>
      </form>
    </div>
  );
}

export default NewExpense;
