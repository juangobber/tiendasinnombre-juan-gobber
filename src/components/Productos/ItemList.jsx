import React from "react";
import Item from "./Item";



function ItemList(props){
   let listadoProductos = props.items

    return(
        listadoProductos.map( (item) => {
            return (
                <Item
                key = {item.id}
                img = {item.img}
                product = {item.product}
                price = {item.price}
                stock = {item.stock}
                initial = {1}
                alt = {item.product}
                />
            )
        
        })
    ) 
}

export default ItemList