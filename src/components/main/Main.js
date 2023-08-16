import React from 'react'
import "./Main.css"


function Main() {
  return (
    <div className='main'>
      <h1>Our Sponsors</h1>
      <img src="https://infinizai.netlify.app/img/blueline.png" alt="" className='main__img1' />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit. Felis, nec
      donec in morbi pulvinar. Enim non pulvinar neque.</p>
      <div className="main__collection">
        <img src="https://infinizai.netlify.app/img/sponsor1.png" alt="" className='main__img2' />
        <img src="https://infinizai.netlify.app/img/sponsor2.png" alt="" className='main__img3'/>
        <img src="https://infinizai.netlify.app/img/sponsor3.png" alt="" className='main__img4' />
        <img src="https://infinizai.netlify.app/img/sponsor4.png" alt="" className='main__img4'/>
        <img src="https://infinizai.netlify.app/img/sponsor5.png" alt="" className='main__img5' />
        <img src="https://infinizai.netlify.app/img/sponsor6.png" alt="" className='main__img6'/>
      </div>
    </div>
  )
}

export default Main