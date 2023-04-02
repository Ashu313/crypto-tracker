
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { Routes } from 'react-router-dom';
import Home from './home/home';





function App() {
  return(
    <BrowserRouter>
   
    <Routes>
     
     {/*<Route path='/'element=
      {<HideHome><Home></Home></HideHome>}/>*/}
    <Route path='/'element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
  
}

export default App;
