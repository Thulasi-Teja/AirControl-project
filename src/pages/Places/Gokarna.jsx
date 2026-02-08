import React from 'react'
import { Link } from 'react-router-dom'

function Gokarna() {
  return (
  <div className='bg-slate-300 pt-4 pb-6 font-serif '>
    <div className='bg-slate-400 w-[80%] text-black rounded-xl
          sm:m-6 ml-12 sm:ml-24 py-4 shadow-lg shadow-black '>
  <h2 className='text-xl ml-8 mb-4 '>Gokarna</h2>
      <Link to='/Gokarna'>
    <img className='rounded-xl w-[60%] ml-16 sm:ml-24 shadow-lg shadow-black  '
    src="gokarna1.1.jpg" alt="Gokarna" />
      </Link>
      <p className='ml-6 mt-4 py-2 px-2' >
    Gokarna is a peaceful beach town in Karnataka, known for its clean beaches and spiritual atmosphere. It is a perfect destination for people who love nature, temples, and quiet seaside views.
                   </p>
                  </div>
              </div>
  )
}

export default Gokarna
