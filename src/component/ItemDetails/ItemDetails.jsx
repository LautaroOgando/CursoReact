import axios from 'axios'
import React,{useEffect, useState} from 'react';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetails = ({item}) => {

    const [buy,setBuy]=useState(true);
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
         setBuy(false);
        setInitial(1);
      }

    }

    useEffect(() => {
      console.log(buy)
    }, [buy])

    return (
         
    
        <div className="row p-1">
        <div className="col-sm-2">
        <div class="card">
        <img src={item.data.image} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">{item.nombre}</p>
          {buy &&
            <ItemCount stock={stock} initial={initial} onAdd={onAdd} removeAdd={removeAdd} checkStock={checkStock} />
          }
          <br />
          <div class="input-group mb-3">
  <Link to={"/stock"} className="btn btn-primary  ">Volver</Link>
        </div>
        </div>
      </div>
      </div>
      </div>


    )

}

export default ItemDetails