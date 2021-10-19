import axios from 'axios'
import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Item from '../Item/Item';
import ItemDetails from '../ItemDetails/ItemDetails';


const ItemDetailContainer = () => {

    const [stock, setStock] = useState(5);
    const [initial, setInitial] = useState(1);
    const [detalle, setDetalle] = useState(null);
    
    const {id}=useParams();

    const onAdd = () =>{
        if(stock>initial) setInitial(initial+1); 
    }

    const removeAdd = () =>{
        if(initial>0) setInitial(initial-1); 
    }
    const checkStock= ()=>{

        if(stock==0){
         alert("Stock Agotado");
        }else{
          setStock(stock-initial);
          setInitial(1);
        }
  
      }

                
      const getDetalle= async()=>{
        try{
             const produc= await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
             setDetalle(produc);

        }catch(error){
             console.log(error);
        }
    }


        useEffect(()=>{
           
           getDetalle();
           console.log(detalle)
           console.log(id)
           
    },[]);
    return (
         <div>
        {detalle && 
            
            <ItemDetails initial={initial}  item={detalle} stock={stock} onAdd={onAdd} removeAdd={removeAdd} checkStock={checkStock} />

        }
    </div>
)

        }

export default ItemDetailContainer
