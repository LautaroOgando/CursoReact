import React from 'react'

const ItemCount = ({initial,stock,onAdd,removeAdd,checkStock}) => {
    return (
        <div>
        <p class="card-text">Stock Disponible={stock}</p>
          <button class="btn btn-primary  col-sm-4" onClick={()=>onAdd()}>+</button>
          <button class="btn btn-danger col-sm-4"  onClick={()=>removeAdd()}>-</button>
          <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder={initial} aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <button class="form-control" onClick={()=>checkStock()} >Agregar Al Carrito</button>
        </div>
    )
}

export default ItemCount
