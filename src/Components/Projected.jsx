import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Projected = (props) => {

      const {Component} = props

      const navigate = useNavigate()

      useEffect(()=>{
            const login = localStorage.getItem("user")
            if(!login){
                  navigate('/login')
            }
      })
  return (
    <div>
      <Component/>
    </div>
  )
}

export default Projected