import React, {useState} from "react";

function Item({ name, category }) {

  const [isCart, setCart] = useState(false)

  const cartClass = isCart ? "in-cart" : "";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => setCart(!isCart)} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
