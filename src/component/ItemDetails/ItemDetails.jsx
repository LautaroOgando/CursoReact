import axios from 'axios'
import React,{useEffect, useState} from 'react';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import {CartContext} from '../CartContext/CartContextProvider';
import { useContext } from 'react';

const ItemDetails = ({item}) => {

    

    console.log(item)
    const {cartList,initial,stock,buy,removeAdd,checkStock,increment}= useContext(CartContext);
    console.log(cartList)

    useEffect(() => {
      console.log(cartList)
    }, [initial])

    return (
        
        <div className="row p-1">
        <div className="col-sm-2">
        <div class="card">
        <img src={item.data.image} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">{item.nombre}</p>
          {buy &&
            <ItemCount stock={stock} item={item}initial={initial} increment={increment}  removeAdd={removeAdd} checkStock={checkStock} />
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