import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-slate-800 text-white font-sans font-semibold h-24 w-full'>
        <div className="nav_name h-full w-full items-center flex justify-around">
            <h1 className="nav text-6xl uppercase">
            <Link to="/"> Contact Manager App </Link>
            </h1>
        </div>
    </div>
  )
}

export default Header