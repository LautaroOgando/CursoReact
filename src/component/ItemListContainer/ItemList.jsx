import { computeHeadingLevel } from '@testing-library/dom';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import Item from '../Item/Item';
import { useParams } from 'react-router';
import { getFirestore } from '../../service/GetFireBase';


const ItemListContainer = () => {

     
    const [producto, setProducto] = useState(null);

    const {name}=useParams();
    //const db = getFirestore();
    //db.coleccion('Items').get()//trae toda la coleccion
    //.then(resp=>console.log(resp));

    //db.coleccion('item').doc('mY5ilcB0SHUqV9HJqsQ4').get()//trae coleccion por id

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
