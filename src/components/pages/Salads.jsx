import React, {useEffect,useState}from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom';

function Salads() {
    const [salads,setSalads]=useState([])
    useEffect(()=>{
        axios.get(`https://h6j4vwge90.execute-api.us-east-1.amazonaws.com/dev/menu/salads`).then(res=>setSalads(res.data))
    })
  return (
    <>
<div className='subnav'>
<ul>
<Link to='../menu/breakfast'><li>Breakfast</li></Link>
<Link to='./menu'><li>Entrees</li></Link>
<Link to='../menu/salads'><li>Salads</li></Link>
 <Link to='../menu/drinks'><li>Drinks</li></Link>
</ul>
</div>

<div className='menu-header'>
<h1>Chick-fil-A® Menu</h1>
<span className='subtext'>Availability may differ at different locations.</span>
</div>
    
    <div className="features" >
    {salads.map(x=><article>
        <a className='image'><img src={x.image}/></a>
        <h3 className='major'>{x.title}</h3>
        <p className='description'>{x.description}</p>
        <a className='special'>Order Now</a>
    </article>)}
    </div>
    </>
)}

export default Salads