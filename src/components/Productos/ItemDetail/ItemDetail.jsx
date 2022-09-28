import React from 'react'
import ItemCount from  '../itemCount/ItemCount'

function ItemDetail(props) {
   let {price, img, product, description, stock, initial} = props
    console.log(initial)
  
  return (
    <div>
      <h1>{product}</h1>
      <img src={img} height="500" alt="" />
      <h2>$ {price}</h2>
      <p>{description}</p>

      <ItemCount
        stock = {stock}
        initial = {initial}
        product = {props.product}
      />
    </div>
  )
}

export default ItemDetail