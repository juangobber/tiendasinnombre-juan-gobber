import React from "react";
import { Button, CardActionArea, CardActions } from '@mui/material';

function ItemCount (props) {
let {stock, initial, limite, onAdd} = props;

const  [counter, setCounter] = React.useState(initial)
let productStock = stock; 
let productLimit = limite;   

function Add(){
    setCounter(counter+1)
    
}

function Substract(){
    setCounter(counter-1);
}

function AgregarAlCarrito(){
    onAdd (counter)
}

return (
        <div>
            <button disabled={counter<= 1} onClick={Substract}>-</button><span>{counter}</span><button disabled= {(counter >= productStock)||counter>= productLimit} onClick={Add}>+</button>
            <div>
            <Button size="medium" color="primary" onClick={AgregarAlCarrito}>
            AÑADIR AL CARRITO
            </Button>
            </div>
        </div>
        
    )
}

export default ItemCount