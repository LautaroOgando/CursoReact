import React,{useState} from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { Link } from 'react-router-dom';

const Item = ({item,initial,stock,onAdd,removeAdd,checkStock}) => {

    
    
    return (
    
    
     <div className="container mx-5  my-1 col col-sm-6 col-md-4 col-lg-3">
      <div class="card" style={{width: "150px"}}>
      <img src={item.image} class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title"></h5>
        <Link to={`/detail/${item.id}`} className="nav-link active">Ver Detalles</Link>
      </div>
    </div>
    </div>
    

 
    )
}

export default Item
