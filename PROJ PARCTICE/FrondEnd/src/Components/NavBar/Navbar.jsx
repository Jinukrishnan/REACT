import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='container'>
      <div className="left">
<span>Home</span>
<span>About</span>
<span>Contact</span>
      </div>
      <div className="right">
        <input type="text" placeholder='Search....' />
        <button>Search</button>
        
         
      </div>
    </div>
  )
}

export default Navbar
