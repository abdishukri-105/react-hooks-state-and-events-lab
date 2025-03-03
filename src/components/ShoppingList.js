import React from "react";
import Item from "./Item";
import {useState} from "react"

function ShoppingList({ items }) {

  const [selectedCategory, setselectedCategory] = useState("All")

  function handleSelectedCategory(e) {
    setselectedCategory(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  }); 

  const itemList = itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  )); 
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList}
      </ul>
    </div>
  );
}

export default ShoppingList;
