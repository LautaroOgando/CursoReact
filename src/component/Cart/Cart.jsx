import React from 'react'
import {CartContext} from '../CartContext/CartContextProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom'

const Cart = () => {

    const {cartList,initial,stock,buy,removeAdd,checkStock,increment,clear,removeId}= useContext(CartContext);


    return (
        <div>
            {cartList && cartList.map((cartList=>
            
            <div class="card" style={{width: "150px"}}>
      <img src={cartList.image} class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title"></h5>
        <button className="btn btn-warning" onClick={()=>removeId(cartList.id)}>Eliminar</button>
        <h6>Cantidad:{cartList.type}</h6>
      </div>
    </div>
    
            ))}
            <br />
            <h1>No hay productos agregados</h1>
            <Link to="/"><button className="btn btn-primary">Regresar</button></Link>
            <br />
            <button className="btn btn-danger" onClick={()=>clear()}>Eliminar Todo El Carrito</button>

        </div>
    )
}

export default Cart

