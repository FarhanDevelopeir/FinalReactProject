import React, { useEffect, useState } from 'react'


const About = () => {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(20)
  
  useEffect(()=>{
    console.log("This useEffect is running every time when anything is update in this component");
  },[count])

  const count_updated=()=>{
    setCount(count + 1)
    console.log('count: ', count);
 
  }
  const value_updated=()=>{
    setValue(value + 20)
    console.log('value: ', value);
  }

  return (
      <>
    <div className=' font-semibold text-5xl'>
      About
      <button className=' bg-blue-800 text-md text-white px-3 py-2 rounded-lg mx-4' onClick={count_updated}>Count Increment</button>
      <button className=' bg-blue-800 text-md text-white px-3 py-2 rounded-lg mx-4' onClick={value_updated}>Value Increment</button>

<br />
      {count} <br />
      {value}
      </div>
      </>
  )
}

export default About