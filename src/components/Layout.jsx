import React from 'react'
import Header from './share/Header';
import Footer from './share/Footer';
import PreFooter from './share/PreFooter';
import {Outlet} from 'react-router-dom'
import '../App.css'
import Menu from './pages/Menu';



function Layout(){
    return (
        <>
        <Header/>
        {/* <Menu/> */}
        <Outlet/>
        <PreFooter/>
        <Footer/>
        </>
    );
}

export default Layout