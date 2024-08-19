import React from 'react'
import wa from '../image/whatsapp.png'
import em from '../image/email.png'
import git from '../image/github.png'
import im from '../image/instagram.png'
import i from '../image/linkedin.png'
export default function Foter() {
  return (
    <div className="footer">
        <div className="heading">Join Us</div>
        <div className="contain">
            <div className="pic">
                <img src={wa} alt="" className='im' />
            </div>
            <div className="pic">
                <img src={em} alt="" className='im' />
            </div>
            <div className="pic">
                <img src={i} alt="" className='im' />
            </div>
            <div className="pic">
                <img src={im} alt="" className='im' />
            </div>
            <div className="pic">
                <img src={git} alt="" className='im' />
            </div>
           
        </div>
        <div className="dot"></div>
    </div>
  )
}
