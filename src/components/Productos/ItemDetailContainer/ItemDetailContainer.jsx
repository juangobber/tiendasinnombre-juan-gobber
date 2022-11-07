
import React, {useEffect, useState} from 'react'
import {getItem}  from "../../../services/firestore";
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from "react-router-dom";


function ItemDetailContainer() {
let [data, setData] = useState({});
const  {id} = useParams();

useEffect(()=> {
    getItem(id).then( (respuestaDatos) => {setData(respuestaDatos)
    });
  },[id]);

  if (!data.id) {
    return <h3>Cargando...</h3>
  } else {
    return (
      <ItemDetail
      id = {data.id}
      key = {data.id}
      price = {data.price}
      product = {data.product}
      img = {data.img}
      description = {data.description}
      initial = {1}
      stock = {data.stock}
      />
    )
  } 
}

export default ItemDetailContainer