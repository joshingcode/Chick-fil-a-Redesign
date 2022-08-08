import React from 'react'
import Header from './share/Header';
import Footer from './share/Footer';

import {Outlet} from 'react-router-dom'
import '../App.css'



function Layout(){
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}

export default Layout