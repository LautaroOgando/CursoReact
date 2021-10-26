import React from 'react'
import { useEffect,useState,createContext,useContext } from 'react'
import Item from '../Item/Item'


export const CartContext= createContext([])
function CartContextProvider ({children})  {
    const [buy, setBuy] = useState(true);
    const [stock, setStock] = useState(15);
    const [initial, setInitial] = useState(1);

    const removeAdd = () =>{
        if(initial>0) setInitial(initial-1); 
    }
    const checkStock= (item)=>{
  
        if(stock==0){
         alert("Stock Agotado");
        }else{
          setStock(stock-initial);
          setInitial(1);
          //setcartList(...cartList,item)
        }
  
      }
  
     


     const[cartList,setcartList]=useState([])

     const increment=()=>{
        if(initial<stock) setInitial(initial+1)
     }

    return (
       <CartContext.Provider value={{
        cartList,
        initial,
        stock,
        buy,
        increment,
        removeAdd,
        checkStock
       }}>

        {children}
        </CartContext.Provider>    
    )
}

export default CartContextProvider
