import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
  return (
    <div class="navbar">
      <div className="left" ><a href=""><h2>Portfolio</h2></a></div>
      <div className="right">
    <ul>
   {/* <a href='/' className='item'><li>Home</li></a>
   <a href='/About.jsx'  className='item'><li>About</li></a>
   <a href="/Contact"className='item' ><li>Contact</li></a>
   <a href="/Skill"className='item' ><li>Skill</li></a> */}
   {/* <li><Link to='/'className='item'></Link></li> */}
 <li><Link to='/'className='item'>Home</Link></li>

            <li><Link to='/Contact' className='item'>Contact</Link></li>
            <li><Link to='/About' className='item'>About</Link></li>
            <li><Link to='/Skill' className='item'>Skill</Link></li>
    
          </ul></div></div>
  )
}
