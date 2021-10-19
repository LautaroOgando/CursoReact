import { computeHeadingLevel } from '@testing-library/dom';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import Item from '../Item/Item';
import { useParams } from 'react-router';



const ItemListContainer = () => {

   
    const [producto, setProducto] = useState(null);

    const {name}=useParams();
 
               const getItem= async()=>{
                try{
                     const produc= await axios.get("https://rickandmortyapi.com/api/character");
                     setProducto(produc.data.results);

                }catch(error){
                     console.log(error);
                }
            }


                useEffect(()=>{
                   
                   getItem();
                   console.log(producto)
                   
            },[]);
        
                
            

    return (
         <div>
       {producto && producto.map((producto=>
            
            <Item  item={producto} />

            ))}
    </div>
)

        }

export default ItemListContainer
