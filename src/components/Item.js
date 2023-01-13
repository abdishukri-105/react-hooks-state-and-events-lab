import React,{useState} from "react";

function Item({ name, category }) {
  const [addcart, setAddCart] = useState(false)

  function addToCart(){
    console.log("added to cart")
    setAddCart(true)
  }
  return (
    <li className={addcart? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
