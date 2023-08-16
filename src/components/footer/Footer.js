import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className='footer'>
        
        <div className="footer__box1">
            <div className="footer__box1_1_1">
                <img src="https://infinizai.netlify.app/img/logo.png" alt=""  className='footer__img1'/>
                <p>Lorem ipsum dolor amet consectetur adipiscing elit. Eget nist nunc quam ac sed turpis volutpat. Cursus sed massa non</p>
            </div>
            <div className="footer__box1_1 ">
                <b>Menu Items </b>
                <p>About </p>
                <p>Blog</p>
                <p>Shop</p>
            </div>
            <div className="footer__box1_1 ikkinci">
                <b>Other Pages</b>
                <p>Styleguid</p>
                <p>Changol</p>
                <p>Licenses</p>
            </div>
            <div className="footer__box1_1 ikkinci">
                <b>Social icons</b>
              
            </div>
        </div>
        <hr  className='footer__hr'/>
        <div className="footer__box1">

            <h1>Copyright by 2021 Flowzai</h1>
        </div>
    </div>
  )
}

export default Footer