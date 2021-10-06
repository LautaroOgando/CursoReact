import React from 'react'
import Navbar from '../Navbar/Navbar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Main = () => {
    return (
        <div>
            <Navbar/>
            <ItemListContainer greeting="Productos Destacados"/>
        </div>
    )
}

export default Main
