import React from 'react'
import "../Css/HomeAbout.css"
import { NavLink } from 'react-router-dom'
import "../Css/Contact.css"
const Contact = () => {
  return (
    <>
    <h1>Contact Us</h1>
    <form className='contact' action="">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='inter Your Name' />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='inter Your Email' />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='inter Your Password' />
      </div>
      <div>
        <label htmlFor="mobile">Mobile</label>
        <input type="text" placeholder='inter Your Mobile' />
      </div>
      <div className="btnBox">
            <div className="btn">
            <NavLink className='readmore'  to='/aboute'>Submit</NavLink>
            </div>
          </div>
    </form>
    </>
  )
}

export default Contact
