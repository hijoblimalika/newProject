import React from 'react'
import "./Customize.css"
function Customize() {
  return (
    <div className='customize'>
        <div className="customize__box">
            <img src="https://infinizai.netlify.app/img/ch.png" alt="" className='customiza__img1'/>
        </div>
        <div className="customize__box">
            <img src="https://infinizai.netlify.app/img/fire.png" alt="" className='customiza__img2'/>
            <span>FUTURE OF ESPORTS</span>
            <h1 className="customiza__h11">
            Customize Your
            Own Character
            </h1>
            <div className="customiza__pp">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia</div>
            {/* <img src="https://infinizai.netlify.app/img/ch3.png" alt="" className='customiza__img3'/> */}
        </div>
    </div>
  )
}

export default Customize