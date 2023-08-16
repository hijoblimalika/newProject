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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis,
        nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
        <div className="banner__box1__button">
          <button>Explore More</button>
          <h3>View Our Team</h3>
        </div>
      </div>
      <div className="banner__box2">
        <img src="https://infinizai.netlify.app/img/main.png" alt=""  className='banner__img3'/>
      </div>
    </div>
  )
}

export default Banner