import React from "react";

function ItemCount (props) {
let {stock, limite, initial} = props;

const  [counter, setCounter] = React.useState(initial)
let productStock = stock; 
let productLimit = limite;   

function OnAdd(){
    setCounter(counter+1)
    
}

function Substract(){
    setCounter(counter-1);
}

return (
        <div>
            <button disabled={counter<= 1} onClick={Substract}>-</button><span>{counter}</span><button disabled= {(counter >= productStock)||counter>= productLimit} onClick={OnAdd}>+</button>
        </div>
    )
}

export default ItemCount