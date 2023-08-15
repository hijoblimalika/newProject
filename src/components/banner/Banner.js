import React from 'react'
import "./Banner.css"


function Banner(props) {
  return (
    <div className='banner__collection'>
      <div className="banner__box1">
        <img src="https://infinizai.netlify.app/img/fire.png" alt="" className='banner__img1'/> <span>FUTURE OF ESPORTS</span>
        <h1 className='banner__h1'>Unleash The   Next</h1>
        <img src="https://infinizai.netlify.app/img/yelloline.png" alt="" className='banner__img2'/>
        <h2 className='banner__h2'>Generation OfGaming</h2>
      </div>
      <div className="banner__box2">
        <img src="https://infinizai.netlify.app/img/main.png" alt=""  className='banner__img3'/>
      </div>
    </div>
  )
}

export default Banner