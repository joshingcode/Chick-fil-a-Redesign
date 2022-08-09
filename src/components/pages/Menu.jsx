import React from 'react'
import {Link} from 'react-router-dom'
import PreFooter from '../share/PreFooter'
import {useEffect, useState} from 'react'
import axios from 'axios';
import Drinks from './Drinks';

function Menu() {
    const [menu, setMenu]= useState([]);
    const port=process.env.PORT
    useEffect(()=>{
        axios.get(`https://h6j4vwge90.execute-api.us-east-1.amazonaws.com/dev/menu`)
        .then(res=>setMenu(res.data))
    })
  
  return (
    <>
    <div className='subnav'>
        <ul>
            <Link to='breakfast'><li>Breakfast</li></Link>
            <Link to='../menu'><li>Entrees</li></Link>
            <Link to='salads'><li>Salads</li></Link>
            <Link to='drinks'><li>Drinks</li></Link>
        </ul>
    </div>
    <div className='menu-header'>
    <h1>Chick-fil-A® Menu</h1>
    <span className='subtext'>Availability may differ at different locations.</span>
    </div>
    
    <div> 
    <div className="features" >
        {menu.map(x=><article>
            <a className='image'><img src={x.image}/></a>
            <h3 className='major'>{x.title}</h3>
            <p className='description'>{x.description}</p>
            <a className='special'>Order Now</a>
        </article>)}
        {/* <article>
            <a className='image'><img src='https://www.cfacdn.com/img/order/menu/Online/Entrees/Jul19_CFASandwich_pdp.png'/></a>
            <h3 className='major'>chicken sand</h3>
            <p></p>
            <a className='special'>Order Now</a>
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
            </article> */}
     </div>
    </div>
    
  

    </>
  )
}

export default Menu





// <img src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Footer%20Images/footer-burger-phone-desktop-new-3.jpg'/>