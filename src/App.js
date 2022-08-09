import React from 'react';
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/pages/Home'
import Menu from './components/pages/Menu'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='menu' element={<Menu/>}></Route>
    <Route path='about' element={<About/>}></Route>
    <Route path='contact' element={<Contact/>}></Route>
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
