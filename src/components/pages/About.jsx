import React from 'react'
import {Link} from'react-router-dom';
function About ()  {
  return (
<>
<div className='subnav'>
        <ul>
            <li>Who We Are</li>
            <li>Great Food</li>
            <li>Giving Back</li>
            <li>History</li>
            <li>S. Truett Cathy Brands</li>
        </ul>
    </div>
<div className='main-wrapper'>
        <h1 className='about-header'>
        Who we are
        </h1>
        <span class="dots">...</span>
        <p className='quote'>
        “We should be about more than just selling chicken.<br/> We should be a part of our customers lives and the communities in which we serve.”
        </p>
</div>
<div className='sunday'>
        <h2>Why we're closed on Sundays</h2>
        <p className='sunday-text'>Our founder, Truett Cathy, made the decision to close on Sundays in 1946 when he opened his first restaurant in Hapeville, Georgia. Having worked seven days a week in restaurants open 24 hours, Truett saw the importance of closing on Sundays so that he and his employees could set aside one day to rest and worship if they choose — a practice we uphold today. Most Chick-fil-A® restaurants operate between the hours of 6 a.m. to 10 p.m. Monday through Saturday, with breakfast served from 6 a.m. to 10:30 a.m. and lunch and dinner served from 10:30 a.m. until 10 p.m. Some hours may vary by location so check with your local Chick-fil-A restaurant.</p>
</div>

<div className="info-section">
    <div className='info-text'>
        <h2>
        The Cows
        </h2>
        <p>
        In 1995, a renegade cow, paintbrush in mouth, painted the three words "EAT MOR CHIKIN" on a Texas billboard. From that day forward, the burger-eating landscape was forever changed. These fearless cows, acting in enlightened self-interest, realized that when people eat chicken, they don't eat beef. Today, the cows' herds have increased and their message reaches millions - through television, radio, online, and on the occasional water tower. Needless to say, we fully endorse and appreciate the monumental efforts made by our most beloved bovine friends.
        </p>
    </div>
    <img src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/Who%20We%20Are/Cows/CFA_Who-We-Are_The-Cows.jpg?h=548&w=618&la=en'/>
</div>
<div className="info-section">
<img src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/Who%20We%20Are/CFA_Who-We-Are_Heart-Of-Atlanta.jpg?h=548&w=618&la=en'/>
    <div className='info-text middle-text'>
        <h2>
        At the heart of Atlanta
        </h2>
        <span className='middle-sub'>Developing a positive legacy in our own backyard </span>
        <p>
        We're proud of our Georgia heritage, and more specifically that we call Atlanta our hometown. Our headquarters, known within the company as the Support Center for restaurant Operators, is located just outside of downtown. We are partners with the greater Atlanta business community in philanthropic endeavors, working to stimulate the local economy through job creation, as well as leading stewardship initiatives intended to leave Georgia better than we found it.
        </p>
    </div>
    
</div>
<div className="info-section">
    <div className='info-text'>
        <h2>
        Visit us
        </h2>
        <p>
        Chick-fil-A Backstage Tour offers an authentic storytelling experience inspired by the fascinating history, culture and values of the company. From our hospitable people and delicious food to the infectious “Eat Mor Chikin” Cows, you can explore the unique Chick-fil-A story with our guided walking tour.
        </p>
        <button>Purchase Tickets</button>
    </div>
    <img src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Contact%20Support/Visit-Us_Contact-and-Support_1440.png?h=387&w=583&la=en'/>
</div>
<div className='next-gen'>
        <h2>The next generation</h2>
         <p>As a family-owned business, the Cathy family has been working together for 70 years. Just as Truett Cathy built Chick-fil-A alongside his wife and children, today several second and third generation Cathy family members are carrying on that tradition, while others pursue talents in other fields. Working in a variety of different capacities, from staff headquartered at the Chick-fil-A Support Center to serving local communities as restaurant Operators, they're coast-to-coast helping people "Eat Mor Chikin®."</p>
                    <img src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/Who%20We%20Are/Gen%203/Gen-3_Who-We-Are_1440.png" class= "backgroundPeople"/>
</div>
</>
)
  }
export default About