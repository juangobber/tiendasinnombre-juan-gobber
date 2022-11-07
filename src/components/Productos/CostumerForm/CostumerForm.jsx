import React from 'react'
import { useContext} from 'react';
import { Button, TextField} from '@mui/material';
import {cartCtx} from "../context/CartContext"
import { createBuyOrder } from "../../../services/firestore";
import {useNavigate} from "react-router-dom"
import { useState } from 'react';
import "./CostumerForm.css"



function CostumerForm() {
    const context = useContext(cartCtx)
    const {cart, deleteCart, getTotalPrice} = context;
    const navigate = useNavigate()
    const [dataForm, setDataForm] = useState({
        name:"",
        phone:"",
        email:"",
    })
    
    function handleCheckout(event){

        const orderData = {
            buyer: dataForm,
            items: cart,
            total: getTotalPrice(),
            date: new Date(),
        }

        createBuyOrder(orderData).then(orderid => { 
            navigate(`/checkout/${orderid}`)
            deleteCart()
        })
    }

    function inputChangeHandler(evento){

        let inputName = evento.target.name
        let value = evento.target.value
        const newDataForm = {...dataForm};
        newDataForm[inputName] = value;
        setDataForm(newDataForm)
    }

    return (
    
    <div className='formulario-container'>
        <h3>Completá este formulario con tus datos</h3>
        <form className='formulario'>
            <div className='input-container'>
                <TextField className='input' id="standard-basic" label="Nombre y Apellido" variant="standard" value={dataForm.name} onChange={inputChangeHandler} name="name" required/>
            </div>   
        
            <div className='input-container'>
                <TextField className="input" id="standard-basic" label="Email" variant="standard" value={dataForm.email} onChange={inputChangeHandler} name="email" required/>
            </div>

            <div className='input-container'>
                <TextField className='input' id="standard-basic" label="Teléfono" variant="standard" value={dataForm.phone} onChange={inputChangeHandler} name="phone" required/>
            </div>

            <Button className='boton' onClick={handleCheckout}> FINALIZAR COMPRA </Button>      
        </form>
    </div>
    
  )
}

export default CostumerForm