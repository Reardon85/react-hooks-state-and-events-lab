import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectCategories, setCategories] = useState("All")

  const itemArray = items.filter((item) => {
    if(selectCategories === "All") return true
    return item.category === selectCategories
  })

  console.log(itemArray)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e) => setCategories(e.target.value)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
