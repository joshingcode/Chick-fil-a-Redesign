import React from 'react'

function Home() {
  const peach= `https://cf-images.us-east-1.prod.boltdns.net/v1/static/1918791242001/6f42cbab-9dd5-453b-ac27-8f11658e157a/7f0d0e79-6c2a-4371-ad98-10b9e5b72801/1280x720/match/image.jpg`
  return (
    <>
    <div className='main-wrapper'>
      <div className="main-text">
        <h1>
        Peach Milkshake Season is Here
        </h1>
        <p>
        Cool off with this creamy classic!
        </p>
        <a>Order Pickup</a>
        <a>Order Delivery</a>
      </div>
      <img src={peach}/>
    </div>
    <div className='first-section'>
      <div className='first-text'>
    <span>Chick-fil-A® Chicken Biscuit</span>
    <h2>Savor summer mornings</h2>
    <p>Treat yourself in the morning with a tender, flaky Chicken Biscuit. Perfectly seasoned chicken wrapped inside a freshly baked biscuit is a great way to start the day.﻿ Available until 10:30 am.
      </p>
      <button>Try the Chicken Biscuit</button>
    </div>
      <img src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Biscuit%20community%20module_desktop.jpeg?h=279&w=535&la=en'/>
    </div>
    <div className='first-section second'>
      <div className='first-text second-text'>
    <span>Summer’s here!</span>
    <h2>Let the sweet celebrations begin</h2>
    
      <button>Give an eGift Card</button>
    </div>
      <img src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/CFA_DigitalGC_Spring_Lemons.png?h=300&w=500&la=en'/>
    </div>
    <div className='first-section'>
      <div className='first-text'>
    
    <h2>Food you can smile about</h2>
    <p>Whether you're in the mood for a freshly prepared salad or a classic like the Chick-fil-A® Chicken Sandwich with Waffle Potato Fries™, we're serving delicious food made with quality ingredients every day of the week (except Sunday).
      </p>
      <button>Explore the menu</button>
    </div>
      <img src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/May%20Menu%20Module/Updated%20May%20Menu%20Module%2005%2031/Trio_Sandwich_Desktop_535%20x%20467_Zoom.jpg?h=467&w=535&la=en'/>
    </div>
    <div className='first-section points-section'>
        {/* <img src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Cling-06_red.png?h=125&w=125&la=en'/> */}

      <div className='first-text points-text'>
      <span>Start earning</span>
    <h2>Earn points on your next order with Chick-fil-A One®</h2>
    
      <button>Join today</button>
    </div>
   
    </div>
    </>
    
    
  )
}

export default Home