import React, {useState, useEffect} from "react";
import "./ItemListContainer.css"
import ItemList from "./ItemList";
import  { getItemsByCategory }  from "../../services/firestore";
import  {getItems} from "../../services/firestore";
import {useParams} from "react-router-dom"

function ItemListContainer(props){
  let {greeting} = props
  const {cat} = useParams();
  let [data, setData] = useState([]);
  
  useEffect(()=> {
      if (cat === undefined){
        getItems().then( (respuestaDatos) => setData(respuestaDatos));
      }
      else{
        getItemsByCategory(cat).then( (respuestaDatos) => {setData(respuestaDatos)});
      }
    },[cat]);

      if (data.length === 0){
        return (
          <div>
            <h1>{greeting}</h1>
            <h2>CARGANDO PRODUCTOS...</h2>
          </div>
        );
      } else {
        return (
          <div>
            <h1>{greeting}</h1>
            <div className="mainContainer wrapper">    
              <ItemList items={data} />
            </div>
          </div>
        );
      }
  
}

export default ItemListContainer