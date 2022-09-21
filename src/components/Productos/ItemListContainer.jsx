import React, {useState, useEffect} from "react";
import "./ItemListContainer.css"
import ItemList from "./ItemList";

function ItemListContainer(props){
  let {greeting} = props

  
  return (
    <div>
      <h1>{greeting}</h1>
      <div className="mainContainer">
      <ItemList/>
      </div>
    </div>
  );
}

export default ItemListContainer