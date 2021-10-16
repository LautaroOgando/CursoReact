import axios from 'axios'
import React,{useEffect, useState} from 'react';
import Item from '../Item/Item';
import ItemDetails from '../ItemDetails/ItemDetails';


const ItemDetailContainer = () => {

    const [stock, setStock] = useState(5);
    const [initial, setInitial] = useState(1);
    const [producto, setProducto] = useState(null);
  

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

                
            
               
        const date=new Promise((response,reject)=>{
            setTimeout(()=>{ 
                response(
                {
                    id:1,
                    nombre:"Iphone XR",
                    description:"64GB,4000mAh,13Mpx",
                    price:"800 USD",
                    img:"https://http2.mlstatic.com/D_NQ_NP_819452-MLA46669400814_072021-O.webp"
                }
                );
            },2000)
        });

               const getItem= async()=>{
                   try{
                        const produc= await date;
                        setProducto(produc)

                   }catch(error){
                        console.log('error');
                   }
               }


               useEffect(()=>{
                    getItem();
                    console.log(producto)
        },[]);
    return (
         <div>
        {producto && 
            
            <ItemDetails initial={initial}  item={producto} stock={stock} onAdd={onAdd} removeAdd={removeAdd} checkStock={checkStock} />

            }
    </div>
)

        }

export default ItemDetailContainer
