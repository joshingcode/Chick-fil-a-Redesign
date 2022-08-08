import React from 'react'

function Header() {
  return (
    <>
    <header id='header'>
        <nav>
    <h1>"logo"</h1>
    <span>Find the spot</span>
    <ul className='nav-items'>
        <li>About</li>
        <li>Menu</li>
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