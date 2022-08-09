import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../pages/Menu'

function Header() {
  return (
    <>
    <header id='header'>
        {/* <nav>
        <Link to='/'><img src='https://i.postimg.cc/zDCkXRrZ/chick-fil-a-png-logo-photo-4839.png' className='header-logo'/></Link>
    <span>Find the spot</span>
    <ul className='nav-items'>
        <li><Link to='about'>About</Link></li>
        <li><Link to='menu'>Menu</Link></li>
        <li><Link to='contact'>Career</Link></li>
        </ul>
        
    <ul className='other-nav-items'>
        <li className='last-2'>Order Food</li>
        <li className='last-2'>"search"</li>

    </ul>
    </nav> */}
<section className="top-nav">
<Link to='/'><img src='https://i.postimg.cc/zDCkXRrZ/chick-fil-a-png-logo-photo-4839.png' className='header-logo'/></Link>
    <span>Find the spot</span>
<input id="menu-toggle" type="checkbox" />
<label className='menu-button-container' htmlFor="menu-toggle">
<div hidden className='menu-button'></div>
</label>
<ul className="menu other-nav-items">
        <li className='prime'><Link to='about'>About</Link></li>
        <li className='prime'><Link to='menu'>Menu</Link></li>
        <li className='prime'><Link to='contact'>Career</Link></li>
        <li>Order Food</li>
        <li className='prime'>"search"</li>

</ul>

</section>


    
    </header>
    </>
  )
}

export default Header



