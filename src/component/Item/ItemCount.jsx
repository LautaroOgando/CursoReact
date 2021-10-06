import React,{useState} from 'react'

const Item = ({text,title,img,initial,stock,onAdd,removeAdd,checkStock}) => {

    
    return (
        <div className="row p-2">
        <div className="col-sm-2">
        <div class="card">
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{text}</p>
          <p class="card-text">Stock Disponible={stock}</p>
          <button class="btn btn-primary  col-sm-4" onClick={()=>onAdd()}>+</button>
          <button class="btn btn-danger col-sm-4"  onClick={()=>removeAdd()}>-</button>
          <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder={initial} aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <div class="input-group mb-3">
  <button class="form-control" onClick={()=>checkStock()} >Agregar Al Carrito</button>
          </div>
        </div>
        </div>
      </div>
      </div>
        
    )
}

export default Item
