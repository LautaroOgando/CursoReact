import React from 'react'
import { useEffect,useState,createContext,useContext } from 'react'
import Item from '../Item/Item'


export const CartContext= createContext([])
function CartContextProvider ({children})  {
    const [buy, setBuy] = useState(true);
    const [stock, setStock] = useState(15);
    const [initial, setInitial] = useState(1);
    const[cartList,setcartList]=useState([])

    const removeAdd = () =>{
        if(initial>0) setInitial(initial-1); 
    }
    const checkStock= (item)=>{
  
        if(stock==0){
         alert("Stock Agotado");
        }else{
          setStock(stock-initial);
          const find=cartList.find(element=>element.id === item.data.id)
          if(find==null){
            
          item.data.type=initial
          setcartList([...cartList,item.data])
          console.log(cartList)
          }else{
        
          const find=cartList.find(element=>element.id === item.data.id)
              find.type+=initial
              console.log(find.type)
          }
        
        setInitial(1);
        }
  
      }
  
     const clear=()=>{
      setcartList([]);
     }

     const removeId=(id)=>{
       
          if(cartList.length==1){
            setcartList([])
          }else{
            const borrar=cartList.find(element=>element.id != id)
            setcartList([borrar])
          }
          
     }


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
        checkStock,
        clear,
        removeId
       }}>

        {children}
        </CartContext.Provider>    
    )
}

export default CartContextProvider
