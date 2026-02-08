import React from 'react'
import { Link } from 'react-router-dom'

function Ooty() {
  return (
        <div className='bg-slate-300 pt-4 pb-6 font-serif '>
        <div className='bg-slate-400 w-[80%] text-black rounded-xl
         sm:m-6 ml-12 sm:ml-24 py-4 shadow-lg shadow-black '>
          <h2 className='text-xl ml-8 mb-4 '>Ooty</h2>
        <Link to='/Ooty'>
        <img className='rounded-xl w-[60%] ml-16 sm:ml-24 shadow-lg shadow-black  '
        src="ooty1.1.jpg" alt="Ooty" />
        </Link>
        <p className='ml-6 mt-4 py-2 px-2' >
          Ooty is a charming hill station in Tamil Nadu, 
           surrounded by green hills and tea plantations. 
           The pleasant climate, botanical gardens, and scenic 
             train ride make it a popular holiday destination.
           </p>
        </div>
    </div>
  )
}

export default Ooty
