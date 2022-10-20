import React from "react";
import {useContext} from "react"
import {cartCtx} from "../context/CartContext"
import { Button} from '@mui/material';
import {Link, useNavigate} from "react-router-dom"
import "./CartView.css"
import { createBuyOrder } from "../../../services/firestore";

//Imports de MUI
import Divider from '@mui/material/Divider';






function CartView() {
    const context = useContext(cartCtx)
    const { cart, getTotalItemsInCart, deleteItem, deleteCart, getTotalPrice} = context;
   
    const navigate = useNavigate()

    function handleCheckout(){
        const orderData = {
            buyer: {
                name: "Juan Manuel",
                email: "juanmanuel@juan.com",
                phone: "034855555"
            },
            items: cart,
            total: getTotalPrice()
        }
        createBuyOrder(orderData).then(orderid => {
            navigate(`/checkout/${orderid}`)
        })
    }

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
                <Button onClick={handleCheckout}> FINALIZAR COMPRA </Button>
            </div>
        </div>
        
        
        ) 
    
}

export default CartView