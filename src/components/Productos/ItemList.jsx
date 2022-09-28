import React from "react";
import Item from "./Item";

function ItemList(props){
   let listadoProductos = props.items

    return(
        listadoProductos.map( (item) => {
            return (
                <div className="itemContainer">
                <Item
                key = {item.id}
                id = {item.id}
                img = {item.img}
                product = {item.product}
                price = {item.price}
                stock = {item.stock}
                initial = {1}
                alt = {item.product}
                />
                </div>
            )
        })
    ) 
}

export default ItemList