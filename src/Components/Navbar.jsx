import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavContent from './NavContent'

const Navbar = () => {
  return (
  
   <div>
    <NavContent/>
    <Outlet/>
   </div>
    
  
  )
}

export default Navbar