import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import axios from 'axios';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import ItemListContainer from './component/ItemListContainer/ItemList';
import React,{useState,useEffect} from 'react';
import Main from './component/Main/Main';
import { computeHeadingLevel } from '@testing-library/dom';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './component/CartContext/CartContextProvider';
import Cart from './component/Cart/Cart';

function App() {

  
  return (
    <CartContextProvider>
   <BrowserRouter>
   <Navbar/>
   <Switch>
    <Route exact path="/">
    <Main/>
    </Route>
    <Route exact path="/stock/">
      <ItemListContainer/>
    </Route>
    <Route exact path="/detail/:id">
      <ItemDetailContainer/>
    </Route>
    <Route exact path="/Cart">
      <Cart/>
    </Route>
    <Route exact path="*">
      <h1>404</h1>
    </Route>
   </Switch>
   </BrowserRouter>
   </CartContextProvider>

  );
}

export default App;
