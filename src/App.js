import React from 'react';
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Layout from './components/Layout';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route element={<Layout/>}></Route>
    <Route element={<Layout/>}></Route>
    <Route element={<Layout/>}></Route>
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
