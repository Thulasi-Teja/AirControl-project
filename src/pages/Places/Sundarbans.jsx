import React from 'react'
import { Link } from 'react-router-dom'

function Sundarbans() {
  return (
      <div className='bg-slate-300 pt-4 pb-6 font-serif '>
    <div className='bg-slate-400 w-[80%] text-black rounded-xl
        sm:m-6 ml-12 sm:ml-24 py-4 shadow-lg shadow-black '>
    <h2 className='text-xl ml-8 mb-4 '>Sundarbans</h2>
      <Link to='/Sundarbans'>
      <img className='rounded-xl w-[60%] ml-16 sm:ml-24 shadow-lg shadow-black  '
        src="sundarbans1.1.jpeg" alt="Sundarbans" />
      </Link>
    <p className='ml-6 mt-4 py-2 px-2' >
     The Sundarbans is the largest mangrove forest in the world, located in West Bengal. It is famous for its unique ecosystem and the Royal Bengal Tiger, making it an important and exciting tourist destination. 
      </p>
    </div>
      </div>
  )
}

export default Sundarbans
