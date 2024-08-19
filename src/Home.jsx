import React from 'react'
import neetu from '../image/new.jpg'
// import neetu from './image/neetu1.jpg';
export default function Home(){
  return (
 <div className="container home">
      <div className="left">
        <span className="feed">Welcome In </span>
        <h1>I am Neetu Pal and a Software developer<span className='h1'> and currently I Purusing Bachalore of Technology in computer science in Artifical Intelligence. </span>   </h1><br></br>
        <a href="" className="btn-btn-outline">Download Resume</a>
      </div>
      <div className="right">
        <div className="img"><img src={neetu} alt="" /></div>
      </div>
   

 </div>

  )
}


