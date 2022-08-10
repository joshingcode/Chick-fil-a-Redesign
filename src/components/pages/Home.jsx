import React from 'react'

function Home() {
  const peach= `https://cf-images.us-east-1.prod.boltdns.net/v1/static/1918791242001/6f42cbab-9dd5-453b-ac27-8f11658e157a/7f0d0e79-6c2a-4371-ad98-10b9e5b72801/1280x720/match/image.jpg`
  return (
    <div><h1>Dummy text!</h1>
    <img src={peach}/>
    </div>
  )
}

export default Home