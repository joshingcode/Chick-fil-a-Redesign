import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../pages/Menu'

function Header() {
  return (
    <>
    <header id='header'>
        <nav>
        <img src='https://i.postimg.cc/zDCkXRrZ/chick-fil-a-png-logo-photo-4839.png' className='header-logo'/>
    <span>Find the spot</span>
    <ul className='nav-items'>
        <li>About</li>
        <li><Link to='menu'>Menu</Link></li>
        <li>Career</li>
        </ul>
        
    <ul className='other-nav-items'>
        <li className='last-2'>Order Food</li>
        <li className='last-2'>"search"</li>

    </ul>
    </nav>
    </header>
    </>
  )
}

export default Header