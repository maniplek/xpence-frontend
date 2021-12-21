import React from 'react'

function NewIncome() {
    return (
        <div>
        <h2>New Income</h2>
        <form action="">
            <div>
            <label for="Amount">Enter the amount</label>
            <br />
            <input type="text" name='amount' placeholder='Enter the amount' />
            </div>
            <div>
            <label for="Category">Choose Category</label>
            <br />
            <select name="" id="">

                    <option value="">Choose Category</option>
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
            <textarea name="description" id="" cols="30" rows="10" placeholder='Tell us more'></textarea>
            </div>
            <div>
                <button>ADD INCOME</button>
            </div>
            
        </form>
    </div>
    )
}

export default NewIncome
