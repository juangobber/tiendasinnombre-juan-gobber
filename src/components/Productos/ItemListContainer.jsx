import React, {useState, useEffect} from "react";
import "./ItemListContainer.css"
import ItemList from "./ItemList";
import  getItems  from "../../services/mockAPI";

function ItemListContainer(props){
  let {greeting} = props

  let [data, setData] = useState([]);
  
  useEffect(()=> {
      getItems().then( (respuestaDatos) => {setData(respuestaDatos)
      });
    },[]);

  return (
    <div>
      <h1>{greeting}</h1>
      <div className="mainContainer">    
        <ItemList
        items={data}
        />
      </div>
    </div>
  );
}

export default ItemListContainer