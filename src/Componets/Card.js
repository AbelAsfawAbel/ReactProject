import React from 'react'
import "../Css/Service.css"
import { NavLink } from 'react-router-dom'
const Card = (props) => {
  return (
    <>
    <div className="card">
        <h2>{props.title}</h2>
        <img src={props.image} className='im' alt="hello" />
        <p>{props.description}</p>
        <div className="btnBox">
            <div className="btn">
            <NavLink className='readmore'  to='/aboute'>{props.button}</NavLink>
            </div>
          </div>

      </div>
    </>
  )
}

export default Card
