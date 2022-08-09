import React from 'react';
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/pages/Home'
import Menu from './components/pages/Menu'
import About from './components/pages/About'
import Contact from './components/pages/Contact';
import Breakfast from './components/pages/Breakfast';
import Salads from './components/pages/Salads';
import Drinks from './components/pages/Drinks';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='menu' element={<Menu/>}/>
    <Route path='menu/breakfast' element={<Breakfast/>}/>
    <Route path='menu/salads' element={<Salads/>}/>
    <Route path='menu/drinks' element={<Drinks/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
