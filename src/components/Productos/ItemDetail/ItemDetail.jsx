import React from 'react'
import { Button} from '@mui/material';

function ItemDetail(props) {
   let info = props
    console.log(info.info.id)

  return (
    <div>
        <h1>{info.info.product}</h1>
        <img src={info.info.img} height="500" alt="" />
        <h2>${info.info.price}</h2>
        <p>{info.info.description}</p>
        <Button size="medium" color="primary">
            AÑADIR AL CARRITO
        </Button>
    </div>
  )
}

export default ItemDetail