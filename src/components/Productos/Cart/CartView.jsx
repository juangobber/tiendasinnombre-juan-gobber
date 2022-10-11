import React from "react";
import {useContext} from "react"
import {cartCtx} from "../context/CartContext"
import { Button} from '@mui/material';
import {Link} from "react-router-dom"
import "./CartView.css"

//Imports de MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';




function CartView() {
    const context = useContext(cartCtx)
    const { cart, getTotalItemsInCart, deleteItem, deleteCart, getTotalPrice} = context;
   
   
    return(
        cart.length === 0 ? 
        <div>
            <h1> Hey! Todavía no has agregado nada al carrito</h1>
            <Button size="medium" color="primary"> <Link className="link" to="/">VER PRODUCTOS</Link> </Button>
        </div> 
        
        :
        <div>
            <h1> Tu carrito tiene {getTotalItemsInCart()} item/s  </h1>
            <div className="CartContainer">
            { cart.map ( item => (
                <div className="CartItem">
                    <div className="CartItemImg">
                        <img src={item.img} className="img"alt="" />
                    </div>
                    
                    <div className="CartItemDescription">
                        <span className="ProductName"><h3>{item.product} </h3> x {item.count}</span> 
                        <span className="CartItemTotalPrice">Subtotal: ${item.count*item.price}</span>
                        
                    </div>
                    <button onClick={()=> deleteItem(item.id)}>x</button>
                    <Divider/>
                </div>
                
            ))}
            </div>
            <div>
                <h2>TOTAL: ${getTotalPrice()}</h2>
                <Button onClick={deleteCart}> VACIAR CARRITO </Button>
            </div>
        </div>
        
        
        ) 
    
}

export default CartView