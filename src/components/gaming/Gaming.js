import React from 'react'
import "./Gaming.css"
import Gaming__img from "../../assets/gaming__img.jpg"
function Gaming() {
  return (
    <div className='gaming'>
        <img src={Gaming__img} alt="" />
        <div className="gaming__text">
            <h1>Join the largest
                gaming community</h1>
                <p>Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus
                lectus. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesu
                ada feugiat. Nulla quis lorem ut libero malesuada feugiat.  Vivamus magna justo</p>
                <div className="gaming__int">
                    <input type="text" placeholder='Your Email Address'/>
                    <button>Subscribe Now</button>
                </div>
        </div>
    </div>
  )
}

export default Gaming