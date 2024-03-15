import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
// import Person2Icon from '@material-ui/icons/Person2';
import CallIcon from '@material-ui/icons/Call';
import '../Css/List.css'
const List = () => {
  return (
    <>
   <header>
    <div className='container container-flex'>
        <div className='logoContainer'>
            <img src="../Img/logo.png" className='logo' alt="logo" />
        </div>
        <nav>
            <dir className='list'>
                <NavLink className='listItem' activeclassName='activeItem' to='/'>Home</NavLink>
                <NavLink className='listItem' activeclassName='activeItem' to='/contcts'>Contact</NavLink>
                <NavLink className='listItem' activeclassName='activeItem' to='/aboute'>About</NavLink>
                <NavLink className='listItem' activeclassName='activeItem' to='/policy'>Policy</NavLink>
                <NavLink className='listItem' to='/services'>Services</NavLink>
            </dir>
        </nav>
        <div className='icons'>
            <SearchIcon className='icon'/>
            {/* <Person2Icon/> */}
            <CallIcon className='icon'/>
        </div>
    </div>
   </header>
    </>
  )
}

export default List
