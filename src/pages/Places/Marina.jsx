import React from 'react'
import { Link } from 'react-router-dom'

function Marina() {
  return (

  <div className='bg-slate-300 pt-4 pb-6 font-serif '>
    <div className='bg-slate-400 w-[80%] text-black rounded-xl
          sm:m-6 ml-12 sm:ml-24 py-4 shadow-lg shadow-black '>
  <h2 className='text-xl ml-8 mb-4 '>Marina</h2>
      <Link to='/Marina'>
    <img className='rounded-xl w-[60%] ml-16 sm:ml-24 shadow-lg shadow-black  '
    src="Marina-beach1.1.jpg" alt="Marina" />
      </Link>
      <p className='ml-6 mt-4 py-2 px-2' > 
        Marina Beach, located in Chennai, is one of the longest urban beaches in the world. It is popular for morning walks, street food, and beautiful sunrise views along the Bay of Bengal.
    </p>
    </div>
  </div>
  )
}

export default Marina

