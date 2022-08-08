import React from 'react'
import Header from './Header';
import Footer from './Footer';

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