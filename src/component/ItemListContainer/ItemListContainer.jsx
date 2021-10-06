import React,{useState} from 'react';
import Item from '../Item/ItemCount';



const ItemListContainer = () => {

    const [stock, setStock] = useState(5);
    const [initial, setInitial] = useState(1); 

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

    return (
        <div>
            <Item initial={initial} stock={stock} onAdd={onAdd} removeAdd={removeAdd} checkStock={checkStock}  text="Iphone XR" title="1100USD" img="https://www.ventasrosario.com.ar/wp-content/uploads/2019/09/iphone-xr-red-select-201809.png"/>
        </div>
    )
}

export default ItemListContainer
