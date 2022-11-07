import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import React, {useContext} from "react";
import { cartCtx } from "./Productos/context/CartContext";

function CartWidget() {
    const {getTotalItemsInCart} = useContext(cartCtx)
    
    

    return(
        getTotalItemsInCart() === 0 ? 
        <div>
        <FontAwesomeIcon icon={ faCartShopping } />
        </div>
        :
        <div>
        <FontAwesomeIcon icon={ faCartShopping } />
        <span>{getTotalItemsInCart()}</span>
        </div>
    )
    
}

export default CartWidget;