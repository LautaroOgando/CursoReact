import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({initial,stock,increment,removeAdd,checkStock,item,finish}) => {

    useEffect(() => {
      console.log()
    }, [stock])


    return (
        <div>
        <p class="card-text">Stock Disponible={stock}</p>
          <button class="btn btn-primary  col-sm-4" onClick={()=>increment()}>+</button>
          <button class="btn btn-danger col-sm-4"  onClick={()=>removeAdd()}>-</button>
          <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder={initial} aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <button class="form-control" onClick={()=>checkStock(item)} >Agregar Al Carrito</button>
          <br />
          {finish &&
          <Link to={"/cart"}  className="btn btn-secondary  ">Terminar Compra</Link>
          }
        </div>
    )
}

export default ItemCount
