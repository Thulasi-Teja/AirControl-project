import React from 'react'
import { Link } from 'react-router-dom'

function Bangalore() {
  return (
      <div className='bg-slate-300 pt-4 pb-6 font-serif '>
    <div className='bg-slate-400 w-[80%] text-black rounded-xl
        sm:m-6 ml-12 sm:ml-24 py-4 shadow-lg shadow-black '>
    <h2 className='text-xl ml-8 mb-4 '>Bangalore</h2>
      <Link to='/Bangalore'>
      <img className='rounded-xl w-[60%] ml-16 sm:ml-24 shadow-lg shadow-black  '
        src="bangalore1.2.jpg" alt="Bangalore" />
      </Link>
    <p className='ml-6 mt-4 py-2 px-2' >
     Bangalore, also called the Silicon Valley of India, is known for its IT industry, pleasant weather, and modern lifestyle. The city has beautiful parks, cafes, and shopping areas, making it a popular destination for both work and travel.
     </p>
    </div>
      </div>
  )
}

export default Bangalore
