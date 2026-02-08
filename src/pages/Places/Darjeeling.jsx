import React from 'react'
import { Link } from 'react-router-dom'

function Darjeeling() {
  return (
            <div className='bg-slate-300 pt-4 pb-6 font-serif '>
                  <div className='bg-slate-400 w-[80%] text-black rounded-xl
                   sm:m-6 ml-12 sm:ml-24 py-4 shadow-lg shadow-black '>
                    <h2 className='text-xl ml-8 mb-4 '>Darjeeling</h2>
                  <Link to='/Darjeeling'>
                  <img className='rounded-xl w-[60%] ml-16 sm:ml-24 shadow-lg shadow-black  '
                  src="darjeeling1.1.jpg" alt="Darjeeling" />
                  </Link>
                  <p className='ml-6 mt-4 py-2 px-2' >
                     Darjeeling is a scenic hill station in West Bengal,
        famous for its tea gardens and views of the Himalayas. 
        The cool climate, toy train, and sunrise at Tiger 
        Hill make it a favorite tourist spot.
                   </p>
                  </div>
              </div>
  )
}

export default Darjeeling
