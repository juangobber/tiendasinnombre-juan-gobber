import React, {useState} from 'react'
import ItemCount from  '../itemCount/ItemCount'
import { Button} from '@mui/material';
import {Link} from "react-router-dom"

function ItemDetail(props) {
   let {price, img, product, description, stock, initial} = props
    console.log(initial)
    
    const  [estadoCart, setEstadoCart] = React.useState(true)


    let HandleAddToCart = function (counter, producto){
      alert(`Añadiste al carrito ${counter} ${producto}`)
      setEstadoCart(false);
    }

  return (
    <div>
      <h1>{product}</h1>
      <img src={img} height="500" alt="" />
      <h2>$ {price}</h2>
      <p>{description}</p>

      {estadoCart === true ? <ItemCount
        stock = {stock}
        initial = {initial}
        product = {props.product}
        onAddToCart = {HandleAddToCart}
      /> : <Button size="medium" color="primary"> <Link className="link" to="/cart">FINALIZAR COMPRA</Link> </Button> }

      
    </div>
  )
}

export default ItemDetail