import React from 'react'
import { Button} from '@mui/material';

function ItemDetail(props) {
   let {price, img, product, description} = props
    console.log(price)

  return (
    <div>
        <h1>{product}</h1>
        <img src={img} height="500" alt="" />
        <h2>$ {price}</h2>
        <p>{description}</p>
        <Button size="medium" color="primary">
            AÑADIR AL CARRITO
        </Button>
    </div>
  )
}

export default ItemDetail