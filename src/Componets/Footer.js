import React from 'react'
import "../Css/Footer.css"
import SearchIcon from '@material-ui/icons/Search';
import CallIcon from '@material-ui/icons/Call';
// import "../Css/List.css"

const Footer = () => {
  return (
    <>
    <footer>
    <div className='container container-flex'>
        <div className='icons'>
            < SearchIcon className='icon'/>
            <CallIcon className='icon'/>
        </div>

        <div className="line">
            <hr/>
            <hr/>
            
          </div>
            <div className="copyright">
                <p>All reserved &copy;</p>
                <p>Developed by Abell</p>
            </div>
        

    </div> 
    </footer>
    
    </>
  )
}

export default Footer
