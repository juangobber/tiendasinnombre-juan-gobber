import React, {useState, useEffect} from "react";
import CardProducto from "./Card";
import  getItems  from "../../services/mockAPI";



function ItemList(){
    let [data, setData] = useState([]);
    useEffect(()=> {
        console.log("prueba useEffect")
        getItems().then( (respuestaDatos) => {setData(respuestaDatos)
        });
      },[]);
    
      return(        
            data.map((item)=>{
            console.log(item.img)
                return <CardProducto
                key= {item.id}
                product= {item.product}
                price= {item.price}
                img= {item.img}
                alt={item.product}
                stock = {item.stock}
                initial ={1}
            />
            })
      )
        
    
}

export default ItemList