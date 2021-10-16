import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import axios from 'axios';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import React,{useState,useEffect} from 'react';
import Main from './component/Main/Main';
import { computeHeadingLevel } from '@testing-library/dom';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';

function App() {

  const[pokemons,setPoke]=useState(null);
  
  return (
    <div>
      <Navbar/>
     <Main/>
    </div>
  );
}

export default App;
