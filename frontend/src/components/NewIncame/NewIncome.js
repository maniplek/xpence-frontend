import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import create_incomeAction from  '../../redux/actions/create_incomeAction';
import newIncome from '../NewIncame/newIncome.css';

function NewIncome() {
 
    
    

  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  const [category_expense, setCategory_expense] = useState('');
  const [decription, setDecription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await dispatch(create_incomeAction({amount, category_expense, decription}));
    if(response === true) {
      window.location = '/login';
    } else {
      setError('error signing up')
    }
  }


    return (
        <div>

       
        <form  action="" onSubmit={handleSubmit}>
        <div className='new-income'>
                <h2>New Income</h2>
            </div>
            <div>
            <label for="Amount" id='name-fld'>Enter the amount</label>
            <br />
            <input 
            type="text" 
            name='amount' 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter the amount' />
            </div>
            <div>
            <label for="Category"  id='name-fld'>Choose Category</label>
            <br />
            <select name="category-income" 
            id=""
            value={category_expense}
            onChange={(e) => setCategory_expense(e.target.value)}
            >

                    <option id='chse'  value="">Choose Category</option>
                    <option value="FOOD">FOOD</option>
                    <option value="COMMUNICATION">COMMUNICATION</option>
                    <option value="ENTERTAINMENT">ENTERTAINMENT</option>
                    <option value="TRANSPORT">TRANSPORT</option>
                    <option value="HANGOUT">HANGOUT</option>
                </select>
            </div>
            <div>
            <label for="decription">decription</label>
            <br />
            <textarea 
            name="description" 
            id="" cols="30" rows="10" 
            value={decription}
            onChange={(e) => setDecription(e.target.value)}
            placeholder='Tell us more'
            ></textarea>
            </div>
            <br></br>
            <div>
                <button id="add-income-btn" type="submit" onClick={handleSubmit}>ADD INCOME</button>
            </div>
            <br/>
            <br/>
            <br/>
            
        </form>
    </div>
    )
}

export default NewIncome
