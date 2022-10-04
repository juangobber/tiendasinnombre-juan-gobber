import React from "react";
import { Button} from '@mui/material';

function ItemCount (props) {
let {stock, initial, limite, product, onAddToCart} = props;

const  [counter, setCounter] = React.useState(initial)
let productStock = stock;   

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

return (
        <div>
            <button onClick={Substract}>-</button><span>{counter}</span><button onClick={Add}>+</button>
            <div>
                <Button size="medium" color="primary" onClick={() => onAddToCart(counter, product)}>
                AÑADIR AL CARRITO
                </Button>
            </div>
        </div>
    )
}

export default ItemCount