import React,{useState} from 'react'

const Item = ({img,initial,stock,onAdd,removeAdd,checkStock,nombre,description}) => {

    console.log(nombre);
    
    return (
        <div className="row p-1">
        <div className="col-sm-2">
        <div class="card">
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">{nombre}</p>
          <p class="card-text">Stock Disponible={stock}</p>
          <button class="btn btn-primary  col-sm-4" onClick={()=>onAdd()}>+</button>
          <button class="btn btn-danger col-sm-4"  onClick={()=>removeAdd()}>-</button>
          <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder={initial} aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <div class="input-group mb-3">
  <button class="form-control" onClick={()=>checkStock()} >Agregar Al Carrito</button>
          </div>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver Detalles</button>
        </div>
        </div>
      </div>
      

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h6>Caracteristicas</h6>
        <p>{description}</p>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>
      </div>
        
    )
}

export default Item
