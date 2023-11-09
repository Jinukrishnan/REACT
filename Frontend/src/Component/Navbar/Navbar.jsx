import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
        <div className='Navbar'>
           <NavLink to='/'>Home</NavLink>
           <a href="">Features</a>
           <a href="">Pricing</a>
           <NavLink to='/Register'>Register</NavLink>
           <NavLink to='/Edit'>Edit Movie</NavLink>
           <NavLink to='/Detail'>Detail</NavLink>



     </div>
  )
}

export default Navbar