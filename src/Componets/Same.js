import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Css/HomeAbout.css"
const Same = ( props) => {
  return (
    <>
    <div className="mainsection">
      <div className="containtBox">
        <h1>{props.title}</h1>
        <p>{props.p}</p>
          <div className="btnBox">
            <div className="btn">
            <NavLink className='readmore'  to='/aboute'>{props.btn}</NavLink>
            </div>
          </div>
      </div>
      <div className="imgContainer">
        <img src={props.img} alt="hello"  />
      </div>
    </div>
    </>
  )
}

export default Same
