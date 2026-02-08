import React from 'react'
import { Link } from 'react-router-dom'

function Periyar() {
  return (
      <div className='bg-slate-300 pt-4 pb-6 font-serif '>
    <div className='bg-slate-400 w-[80%] text-black rounded-xl
        sm:m-6 ml-12 sm:ml-24 py-4 shadow-lg shadow-black '>
    <h2 className='text-xl ml-8 mb-4 '>Periyar</h2>
      <Link to='/Periyar'>
      <img className='rounded-xl w-[60%] ml-16 sm:ml-24 shadow-lg shadow-black  '
        src="periyar1.1.jpg" alt="Periyar" />
      </Link>
    <p className='ml-6 mt-4 py-2 px-2' >
     Periyar is a well-known wildlife destination in Kerala, famous for the Periyar National Park. Visitors can enjoy boat safaris, forest views, and spot animals like elephants in their natural habitat. 
      </p>
    </div>
      </div>  
  )
}
export default Periyar
