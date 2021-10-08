import { computeHeadingLevel } from '@testing-library/dom';
import React,{useEffect, useState} from 'react';
import Item from '../Item/Item';



const ItemListContainer = () => {

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
                response([
                {
                    id:1,
                    title:"Iphone XR",
                    description:"64GB,4000mAh,13Mpx",
                    price:"800 USD",
                    pictureurl:"https://http2.mlstatic.com/D_NQ_NP_819452-MLA46669400814_072021-O.webp"
                },
                {
                    id:1,
                    title:"Iphone 8",
                    description:"64GB,4000mAh,13Mpx",
                    price:"500 USD",
                    pictureurl:"https://http2.mlstatic.com/D_NQ_NP_761686-MLA31003080334_062019-O.webp"
                }

                ]);
            },2000)
        });
   
    

        useEffect(()=>{
            if(!producto){
       date.then((resp)=>{
            console.log('ok');
            setProducto(resp);
       });
    }
    },[producto]);



    return (
        <div>
            {producto && producto.map((producto=>
            
            <Item initial={initial} key={producto.id} nombre={producto.title} description={producto.description} stock={stock} onAdd={onAdd} removeAdd={removeAdd} checkStock={checkStock}  text="Iphone XR" title="1100USD" img={producto.pictureurl}/>

            ))}
        </div>
    )
}

export default ItemListContainer
