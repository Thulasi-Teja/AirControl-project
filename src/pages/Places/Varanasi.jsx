import React from 'react'
import { Link } from 'react-router-dom'

function Varanasi() {
  return (
  <div className='bg-slate-300 pt-4 pb-6 font-serif '>
    <div className='bg-slate-400 w-[80%] text-black rounded-xl
          sm:m-6 ml-12 sm:ml-24 py-4 shadow-lg shadow-black '>
  <h2 className='text-xl ml-8 mb-4 '>Varanasi</h2>
      <Link to='/Varanasi'>
    <img className='rounded-xl w-[60%] ml-16 sm:ml-24 shadow-lg shadow-black  '
    src="varanasi1.1.jpg" alt="Varanasi" />
      </Link>
      <p className='ml-6 mt-4 py-2 px-2' > 
       Varanasi is one of the oldest living cities in the world and is located in Uttar Pradesh. It is famous for its ghats along the River Ganga, where people perform rituals and prayers. Varanasi is a major spiritual center and represents the deep cultural and religious heritage of India.
    </p>
    </div>
  </div>
  )
}

export default Varanasi
