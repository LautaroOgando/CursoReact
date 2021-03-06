import axios from 'axios'
import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Item from '../Item/Item';
import ItemDetails from '../ItemDetails/ItemDetails';


const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState(null);
    
    const {id}=useParams();

    
                
      const getDetalle= async()=>{
        try{
             const produc= await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
             setDetalle(produc);

        }catch(error){
             console.log(error);
        }
    }

        useEffect(() => {
            if(detalle==null){
            console.log('ok')
            getDetalle();
            console.log(detalle)
            console.log(id)
            }
            return () => {
                console.log('se cambio detalle')
                console.log(detalle)
            }
        }, [detalle])
        
          
    return (
         <div>
        {detalle && 
            
            <ItemDetails   item={detalle}  />

        }
    </div>
)

        }

export default ItemDetailContainer
