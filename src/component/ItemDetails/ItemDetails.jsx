import axios from 'axios'
import React,{useEffect, useState} from 'react';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

const ItemDetails = ({item,initial,stock,onAdd,removeAdd,checkStock}) => {

    return (
         
    
        <div className="row p-1">
        <div className="col-sm-2">
        <div class="card">
        <img src={item.data.image} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">{item.nombre}</p>
          <p class="card-text">Stock Disponible={stock}</p>
          <button class="btn btn-primary  col-sm-4" onClick={()=>onAdd()}>+</button>
          <button class="btn btn-danger col-sm-4"  onClick={()=>removeAdd()}>-</button>
          <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder={initial} aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <button class="form-control" onClick={()=>checkStock()} >Agregar Al Carrito</button>
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