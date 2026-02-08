import React from 'react'
import { Link } from 'react-router-dom'

function Delhi() {
  return (
      <div className='bg-slate-300 pt-4 pb-6 font-serif '>
    <div className='bg-slate-400 w-[80%] text-black rounded-xl
        sm:m-6 ml-12 sm:ml-24 py-4 shadow-lg shadow-black '>
    <h2 className='text-xl ml-8 mb-4 '>Delhi</h2>
      <Link to='/Delhi'>
      <img className='rounded-xl w-[70%] ml-16 sm:ml-24 shadow-lg shadow-black  '
        src="delhi1.2.jpg" alt="Delhi" />
      </Link>
    <p className='ml-6 mt-4 py-2 px-2' >
      Delhi is the capital city of India and is rich in history and culture. It is home to famous landmarks like India Gate, Red Fort, and Qutub Minar. Delhi combines ancient heritage with modern city life.
      </p>
    </div>
      </div>    
  )
}

export default Delhi
