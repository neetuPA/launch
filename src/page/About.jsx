import React from 'react'
import img2 from '../image/icons8-girl-light-skin-tone-48.png'
import img3 from '../image/icons8-phone-30.png'
import img4 from '../image/icons8-email-30.png'
import img5 from '../image/icons8-location-50.png'
import img6 from '../image/about.jpg'

export default function About  ()  {
  return (
    
<div className="about"> 

  <div className="lefty">
    <img src={img6} alt="" />
  </div>
    <div className="righty">
    <div className="name">
    <div className="shift">
      <img src={img2} className="aimg"alt="" />
      <p>Name</p>
      <h3>Neetu Pal</h3></div> 
    </div>
    <div className="name">
          <div className="shift">
      <img src={img3}className="aimg" alt="" />
      <p>Phone Number</p>
      <h3>+91 9355159423</h3></div> 
    </div>
    <div className="name">
      <img src={img4} className="aimg"alt="" />
    <div className="shift">
         <p>Email</p>
      <h3>2004neetupal@gmail.com</h3></div> 
    </div>
    <div className="name">
          <div className="shift">
      <img src={img5} alt="" className="aimg" />
      <p>Lcation</p>
      <h3>Ghaziabad</h3></div> 
    </div>
    </div>
</div>
 
  )
} 
