import React from 'react';
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/pages/Home'
import Menu from './components/pages/Menu'
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='menu' element={<Menu/>}></Route>
    <Route element={<Layout/>}></Route>
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
