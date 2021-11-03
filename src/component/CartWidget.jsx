import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext/CartContextProvider';
import { useContext } from 'react';

const CartWidget = () => {

    const {cartList,initial,stock,buy,removeAdd,checkStock,increment,finish}= useContext(CartContext);
    return (
        <div>
            {cartList && cartList.map((cartList=>
            <Link to="/cart"><i class="bi bi-cart">{cartList.type}</i></Link>
            ))}
        </div>
    )
}

export default CartWidget
