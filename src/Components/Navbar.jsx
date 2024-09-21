import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-slate-600 flex justify-between py-4 px-9 text-white'>
      <h1 className=' font-semibold' >Navbar</h1>
      <div className=' flex text-lg  w-[26%] justify-between'>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar