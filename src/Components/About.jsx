import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateCounts } from './features/HomePageSlice'


const About = () => {
  const countValue = useSelector((state)=>state.homepage.count)
  console.log(countValue);
  
  const dispatch = useDispatch()

  const [value, setValue] = useState(20)
  
  

  const value_updated=()=>{
    setValue(value + 20)
    console.log('value: ', value);
  }

  return (
      <>
    <div className=' font-semibold text-5xl'>
      About
      <button className=' bg-blue-800 text-md text-white px-3 py-2 rounded-lg mx-4' onClick={() => dispatch(UpdateCounts(countValue + 1))}>Count Increment</button>
      <button className=' bg-blue-800 text-md text-white px-3 py-2 rounded-lg mx-4' onClick={value_updated}>Value Increment</button>

<br />

      {countValue} <br />
      {value}
      </div>
      </>
  )
}

export default About