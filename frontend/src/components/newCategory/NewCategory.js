import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import create_categoryAction from '../../redux/actions/create_categoryAction';
import newCategory from "../newCategory/newCategory.css";

function NewCategory() {
 
  const dispatch = useDispatch();
  const [category_name, setCategory_name] = useState('');
  const [category_type, setCategory_type] = useState('');
  const [error, setError] = useState('');

  // const [users ,setUser] = useState([]);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await dispatch(create_categoryAction({category_name, category_type}));
    // if(response === true) {
    //   window.location = '/login';
    // } else {
    //   setError('error signing up')
    // }
  }


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <h2 id="new-category">New Category</h2>
        </div>

        <div>
          <label for="Category name">Category Name</label>
          <br></br>
          <input 
          type="text" 
          name="category_name" 
          value={category_name}
          onChange={(e) => setCategory_name(e.target.value)}
          placeholder="Category Name" 
          />
        </div>
<br></br>
        <div>
          <label for="type">Type</label>
          <br></br>
          <select 
          name="category_type"
          value={category_type}
          onChange={(e) => setCategory_type(e.target.value)}
           id="" 
           >
            <option value="">Expense Category</option>
            <option value="FOOD">Expense Category</option>
            <option value="FOOD">Expense Category</option>
            <option value="FOOD">Expense Category</option>
          </select>
        </div>
        <br></br>

        <div>
          <button type="submit" id='add-category-bttn' onClick={handleSubmit}>ADD CATEGORY</button>
        </div>

        <br></br>
        
        
      </form>
    </div>
  );
}

export default NewCategory;
