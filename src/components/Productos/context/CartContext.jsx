import { faPrescriptionBottleAlt } from "@fortawesome/free-solid-svg-icons";
import { toUnitless } from "@mui/material/styles/cssUtils";
import React, {useState, createContext} from "react";

// importamos y iicializamos el context
const cartCtx = createContext();

export default function CartContextProvider({children}){
    const [cart, setCart] = useState([])

    function addItem(item, quantity){

        if ((isInCart(item.id))){
            
            let newCart = cart.map((itemMapeo) => {
                if(itemMapeo.id === item.id){
                    let newItem = itemMapeo;
                    newItem.count += quantity
                    return itemMapeo;
                }
                else {
                    return itemMapeo
                }
            })
            setCart(newCart)
        } else { 
            let newCart = [...cart];
            newCart.push({...item, count: quantity})
            setCart(newCart)
        }
    }

    function getTotalItemsInCart(){
        let total = 0;
        cart.forEach(item => total += item.count)
        return total
    }

    function isInCart(numeroId){
        let found = cart.some((item) => item.id === numeroId);
        return found;
    }

    function deleteItem(id){
        let cartCopy = [...cart]
        return setCart(cartCopy.filter(item => item.id !== id))
    }

    function deleteCart(){
        setCart([])
    }

    function getTotalPrice(){
        let precioFinal = 0;
        cart.forEach(item => precioFinal += (item.price*item.count))
        return precioFinal
    }

    return (
    //pasamos el objeto value a los hijos
    <cartCtx.Provider value={{isInCart, cart, addItem, getTotalItemsInCart, deleteItem, deleteCart, getTotalPrice}}>
        {children}
    </cartCtx.Provider>
    )

}

export {cartCtx}