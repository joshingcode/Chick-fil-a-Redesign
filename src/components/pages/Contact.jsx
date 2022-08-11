

import React from 'react';

function Contact() {
  return (
    <>
    <main className='main-wrapper'>

      <h1>Careers</h1>
    </main>
    
    <div className='career-one'>
    <h2>At Chick-fil-A...</h2>
    <p>Our aim is to serve guests and communities well, and we know that starts 
      with people. Creating a positive and productive place to work is important to 
       both Chick-fil-A, Inc. and Chick-fil-A Franchisees.
    </p>
    </div>
    <div className="tab">
<button className="tablinks red" onclick="openCity(event, 'Restaurants')">Restaurants</button>
<button className="tablinks" onclick="openCity(event, 'Corporate')">Corporate</button>
<button className="tablinks" onclick="openCity(event, 'Franchising')">Franchising</button>
<button className="tablinks" onclick="openCity(event, 'LDP')">LDP</button>
<button className="tablinks" onclick="openCity(event, 'Licensing')">Licensing</button>
 <button className="tablinks" onclick="openCity(event, 'Chick-fil-A Supply')">Chick-fil-A Supply</button>
<button className="tablinks" onclick="openCity(event, 'Bay Center Foods')">Bay Center Foods</button>

 </div>
 <div id="Restaurants" className="tabcontent">
  <div className='rest-text'>
  <h3>Restaurants</h3>
  <p>Most Chick-fil-A restaurant businesses are locally owned and operated by entrepreneurial, franchised Operators.  A range of Team Member opportunities exist at each restaurant, including front-of-house, back-of-house and leadership roles. Explore all the reasons why working at your local Chick-fil-A is a place to work hard, have fun and make an impact.</p>
  <button className='learn-more'>Learn More </button>
  </div>
  <img className='restaurant-pic'src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Careers%20Images/restaurants-tab-new-image.png?h=633&w=825&la=en' alt='restaurant pic' />

</div> 
<div className='related-story'>
<h4>Related stories</h4>
<div className='stories'>
  <article>
  <img src="https://d1fd34dzzl09j.cloudfront.net/2021/08/New%20TM%20Images/Kristine_Square_new.jpg?h=850&amp;w=1150&amp;la=en" data-component="objectFitPolyfill" alt=""/>
    <h5>My Chick-fil-A Success Story: How being a Team Member prepared this ER nurse to care on the frontlines</h5>
    <p>“Being able to have all my patients feel cared for and understood and listened to — I learned that skill from Chick-fil-A.”</p>
    <span>
      <br></br>
      	Featured 
					<a className='click-me' href="https://www.chick-fil-a.com/stories/inside-chick-fil-a">Inside Chick-fil-A</a>
			</span>
  </article>
  <article>
  <img className='mid'src="https://d1fd34dzzl09j.cloudfront.net/2021/08/New%20TM%20Images/Carolina_smaller_updated.jpg?h=806&amp;w=1000&amp;la=en" data-component="objectFitPolyfill" alt=""/>
    <h5>My Chick-fil-A Success Story: From restaurant Team Member to fifth-grade teacher</h5>
    <p>“I could go on and on about everything my local Chick-fil-A restaurant experience taught me. But if I had to choose just three lessons, they would be leadership, communication and teamwork.”</p>
    <span>
					Featured
					<a href="https://www.chick-fil-a.com/stories/inside-chick-fil-a">Inside Chick-fil-A</a>
				</span>
  </article>
  <article>
  <img src="https://d1fd34dzzl09j.cloudfront.net/2021/08/New%20TM%20Images/Joshua_smaller_new.jpg?h=451&amp;w=551&amp;la=en" data-component="objectFitPolyfill" alt=""/>
    <h5>My Chick-fil-A Success Story: Team-Member-turned-Team-Leader focuses on creating connections</h5>
    <p>“As a company, business and family, it’s very important that we all form connections and teach our Team Members how to connect with guests.”</p>
    <span>
					Featured
					<a href="https://www.chick-fil-a.com/stories/inside-chick-fil-a">Inside <span class="nowrap">Chick-fil-A</span></a>
				</span>
  </article>
</div>
<div className='load-more'>
  <button>Load More</button>
</div>
</div>


    </>

    
  )


    
  
}

export default Contact;
