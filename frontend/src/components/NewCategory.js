import React from 'react'

function NewCategory() {
    return (
        <div>
            <h2>New Category</h2>
            <form action="">
                <label for='Category name'>Category Name</label>
                <br/>
                <input type="text" name="category-name" />
                <label>Type</label>
                <br/>
                <select name="type" id="">
                    <option value="">Expense Category</option>
                    <option value="FOOD">Expense Category</option>
                    <option value="FOOD">Expense Category</option>
                    <option value="FOOD">Expense Category</option>
                </select>
                <div>
                    <button>ADD CATEGORY</button>
                </div>
            </form>
        </div>
    )
}

export default NewCategory
