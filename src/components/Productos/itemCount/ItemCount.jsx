import React from "react";
import { Button, CardActionArea, CardActions } from '@mui/material';

function ItemCount (props) {
let {stock, initial, limite, onAdd} = props;

const  [counter, setCounter] = React.useState(initial)
let productStock = stock; 
let productLimit = limite;   

function Add(){
    if ((productStock > 0) && (counter < stock)){
        setCounter(counter+1)
        productStock= productStock - 1;
    }
    
    
}

function Substract(){
    if (counter > 1) {
        setCounter(counter-1);
        productStock = productStock + 1;
    }
  
}

function AgregarAlCarrito(){
    onAdd (counter)
}

return (
        <div>
            <button onClick={Substract}>-</button><span>{counter}</span><button onClick={Add}>+</button>
            <div>
            <Button size="medium" color="primary" onClick={AgregarAlCarrito}>
            AÑADIR AL CARRITO
            </Button>
            </div>
        </div>
        
    )
}

export default ItemCount