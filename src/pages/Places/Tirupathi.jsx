import React from 'react'
import { Link } from 'react-router-dom'

function Tirupathi() {
  return (
      <div className='bg-slate-300 pt-4 pb-6 font-serif '>
    <div className='bg-slate-400 w-[80%] text-black rounded-xl
        sm:m-6 ml-12 sm:ml-24 py-4 shadow-lg shadow-black '>
    <h2 className='text-xl ml-8 mb-4 '>Tirupathi</h2>
      <Link to='/Tirupathi'>
      <img className='rounded-xl w-[60%] ml-16 sm:ml-24 shadow-lg shadow-black  '
        src="tirupathi1.1.jpg" alt="Tirupathi" />
      </Link>
    <p className='ml-6 mt-4 py-2 px-2' >
      Tirupati is one of the most famous pilgrimage destinations in India, located in Andhra Pradesh. It is home to the Sri Venkateswara Temple, which attracts millions of devotees every year. The city is known for its spiritual atmosphere and well-organized temple services.
      </p>
    </div>
      </div>
  )
}

export default Tirupathi
