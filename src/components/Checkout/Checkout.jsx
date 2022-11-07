import React from 'react'
import {useParams, Link} from "react-router-dom"
import { Button} from '@mui/material';


function Checkout() {
  const idParam = useParams()
  return (
     <div>

        <h1>Gracias por tu compra!</h1>
        <h3>Este es el codigo de identificación:</h3>
        <h2> {idParam.idcheckout} </h2>
        <h4>Recordá anotarlo</h4>

        <Button size="medium" color="primary"> <Link className="link" to="/">CONTINUAR</Link> </Button>
    </div>
  )
}

export default Checkout