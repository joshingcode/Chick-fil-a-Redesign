import React from 'react'
import PreFooter from '../share/PreFooter'

function Menu() {
  return (
    <>
    <div className='menu-header'>
    <h1>Chick-fil-A® Menu</h1>
    <span className='subtext'>Availability may differ at different locations.</span>
    </div>
    
    <div> 
    <div className="features" >
        <article>
            <a className='image'><img src='https://www.cfacdn.com/img/order/menu/Online/Entrees/Jul19_CFASandwich_pdp.png'/></a>
            <h3 className='major'>chicken sand</h3>
            <p></p>
            <a className='special'>Buy Now</a>
            </article>
        <article>
            <a className='image'><img src='https://www.cfacdn.com/img/order/menu/Online/Entrees/Jul19_CFASandwich_pdp.png'/></a>
            <h3 className='major'>chicken sand</h3>
            <p></p>
            <a className='special'>Buy Now</a>
        </article>
        <article>
            <a className='image'><img src='https://www.cfacdn.com/img/order/menu/Online/Entrees/Jul19_CFASandwich_pdp.png'/></a>
            <h3 className='major'>chicken sand</h3>
            <p></p>
            <a className='special'>Buy Now</a>
            </article>
     </div>
    </div>
    
    <PreFooter/>

    </>
  )
}

export default Menu





// <img src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Footer%20Images/footer-burger-phone-desktop-new-3.jpg'/>