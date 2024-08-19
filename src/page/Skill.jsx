import React from 'react'
import html from '../image/html-5.png'


import css from '../image/css.png'
import js from  '../image/js.png'
import git from '../image/github.png'
import java from '../image/java.png'
import react from '../image/react.png'
export  default function About  ()  {
  return (
    // <div className="container skill">
    //     <h1> SKILLS</h1>
    //   <div className="row">
    //     <div className="col-md-4">
    //         <div className="card">
    //             <div className="card-body">
    //                 <h5 className="card-title">HTML</h5>
    //                 <div className="logo"><img src={html} alt="" /></div>

    //             </div>
    //         </div>
    //         <div className="col-md-4">
    //          <div className="card">
    //             <div className="card-body">
    //                 <h5 className="card-title">CSS</h5>
    //                 <div className="logo"><img src={css} alt="" /></div>

    //             </div>
    //         </div>
    //        
<div className="container skill">
<h1> SKILLS</h1>
    <div className="cards">
        <div className="card">
            <img src={html} alt="" />
            <div className="title">HTML</div>
            
        </div>
        
    

        <div className="card">
            <img src={css} alt="" />
            <div className="title">CSS</div>
        </div>

 
        <div className="card">
            <img src={js} alt="" />
            <div className="title">JAVA SCRIPT</div>
        </div>
        <div className="card">
            <img src={java} alt="" />
            <div className="title">JAVA</div>
        </div>
        <div className="card">
            <img src={react} alt="" />
            <div className="title">REACT</div>
        </div>
         <div className="card">
            <img src={git} alt="" />
            <div className="title">GIT HUB</div>
        </div>
    </div>
</div>
  )
}
