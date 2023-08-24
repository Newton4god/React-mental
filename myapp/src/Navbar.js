import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { useState } from "react";
import {FaBarsStaggered }from 'react-icons/fa6'
import {FaTimes} from 'react-icons/fa'

const Navbar = () => {
 
  const [mobile, setmobile] = useState(false)
    

    return (
        <div className="dash">
      <nav className="nav">
          <img src='./img/logo.jpeg' alt='Mental Health' className='logo'/>
      {/* <h1 className="h1">Telehealth</h1> */}
     
      <ul  className= { mobile ? "nav-lin active" : 'nav-lin'} onClick={() => setmobile(false )}>
      <Link className='li' to = '/'  onClick={() => setmobile(false )}>
                <li>Home</li>
         </Link>
      <Link className='li' to = '/about'  onClick={() => setmobile(false )}>
                <li>About</li>
           </Link>
      <Link className='li' to = '/price'  onClick={() => setmobile(false )}>
                <li>Pricing</li>
           </Link>
      <Link className='li' to = '/service'  onClick={() => setmobile(false )}>
                <li>Service</li>
           </Link>
      <Link className='li' to = '/contact' onClick={() => setmobile(false )} >
                <li>Contact</li>
           </Link>
      {/* <Link className='li' to = '/chatbox' onClick={() => setmobile(false )} >
                <li>Chatbox</li>
           </Link> */}
     

     <li className="oga" onClick={() => setmobile(false )}>
      
    
     </li>


      </ul>

 <div className="overo"> 
      <p className = "mobile-menu-icon"   onClick={ () => setmobile(!mobile) } >
            {mobile? <FaTimes/> : <FaBarsStaggered/>}
           
           </p>
      </div>

        </nav>
    </div>

  )
}

export default Navbar