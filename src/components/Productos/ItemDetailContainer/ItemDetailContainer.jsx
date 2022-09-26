
import React, {useEffect, useState} from 'react'
import {getItem}  from "../../../services/mockAPI";
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemDetailContainer() {
let [data, setData] = useState({});
  
useEffect(()=> {
    getItem().then( (respuestaDatos) => {setData(respuestaDatos)
    });
  },[]);

  return (
    <ItemDetail
    price = {data.price}
    product = {data.product}
    img = {data.img}
    description = {data.description}
    />
  )
}

export default ItemDetailContainer