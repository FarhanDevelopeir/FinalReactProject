import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../assets/data.json'

const DetailPage = () => {
  const {name} = useParams()
  console.log(name);
  const getDetails = data.products.find((item)=>item.name === name)
  // console.log(getDetails);

  return (
    <div>
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {getDetails.name}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
           {getDetails.description}
            </p>
          
          </div>
      
     
    </div>
  )
}

export default DetailPage