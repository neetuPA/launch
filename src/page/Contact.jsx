import React from 'react'

export default function Contact  () {
  return (

    
<div className=" container contact">
<h2 className="head"> Contact Us</h2>
   <div className="left">
    <p>
    I'm  Neetu Pal further details ,contuct us and share your experinence to me..... 
       </p>
   </div>
    
     <div className="right">
   <div className="form">
   <h2> Fill the Form</h2>
        {/* create a form */}
        <label for="name" className='label'>Name :</label> <input type ="text" className='form-control'/><br></br><br></br>
        <label for="number"className='label'>Phone number :</label> <input type ="text" className='form-control'/><br></br><br></br>
        <label for="Address"className='label'>Address :</label>  <input type ="text" className='form-control'/><br></br><br>
       </br>
       <label for="Query"className='label'>Query :</label>  <textarea className='form-control'/><br></br><br></br>
      <button className='btn'> Send</button>
<br></br>
    
   </div>
   </div>
</div>
  )
}
