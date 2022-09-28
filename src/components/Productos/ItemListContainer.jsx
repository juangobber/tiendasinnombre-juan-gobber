import React, {useState, useEffect} from "react";
import "./ItemListContainer.css"
import ItemList from "./ItemList";
import  getItems, { getItemsByCategory }  from "../../services/mockAPI";
import {useParams} from "react-router-dom"

function ItemListContainer(props){
  let {greeting} = props
  const {cat} = useParams();
  console.log("holanda",useParams())
  let [data, setData] = useState([]);
  
  useEffect(()=> {
      if (cat === undefined){
        getItems().then( (respuestaDatos) => {setData(respuestaDatos)});
      }
      else{
        getItemsByCategory(cat).then( (respuestaDatos) => {setData(respuestaDatos)});
      }
    },[cat]);

  return (
    <div>
      <h1>{greeting}</h1>
      <div className="mainContainer wrapper">    
        <ItemList items={data} />
      </div>
    </div>
  );
}

export default ItemListContainer