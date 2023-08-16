import React from 'react'
import "./NewEra.css"
function NewEra() {
  return (
    <div className='newera'>
        <div className="newera__box">
            <img src="https://infinizai.netlify.app/img/fire.png" alt="" className='newera__img1'/>
            <span>FUTURE OF ESPORTS</span>
            <h1 className="newEra__h11">
            The New Era Of
            Cloud Gaming Here
            </h1>
            <p className="newera__pp">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architecto           beatae
            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            </p>
            <button className="newera__button">Expplore More</button>
        </div>
        <div className="newera__box2">
            <img src="https://infinizai.netlify.app/img/era.png" alt=""  className='newera__img2'/>
        </div>
    </div>
  )
}

export default NewEra