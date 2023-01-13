import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState(true)


  function changeTheme(){
    setTheme(!theme);
    console.log("changedTheme")
  }

  return (
    <div  className={theme? "App light" : "App dark" }>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeTheme}> Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
