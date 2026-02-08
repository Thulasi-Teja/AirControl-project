import React from 'react'
import { Link } from 'react-router-dom'

function Ajantacanvas() {
  return (
       <div className='bg-slate-300 pt-4 pb-6 font-serif '>
        <div className='bg-slate-400 w-[80%] text-black rounded-xl
         sm:m-6 ml-12 sm:ml-24 py-4 shadow-lg shadow-black '>
          <h2 className='text-xl ml-8 mb-4 '>Ajanta Canvas</h2>
        <Link to='/Ajantacanvas'>
        <img className='rounded-xl w-[60%] ml-16 sm:ml-24 shadow-lg shadow-black  '
        src="ajantacanvas1.1.jpg" alt="Ajanta" />
        </Link>
        <p className='ml-6 mt-4 py-2 px-2' >
           Ajanta Caves are famous ancient rock-cut caves located in Maharashtra.
   They are known for beautiful paintings and sculptures that 
  show the life of Buddha and ancient Indian culture.
   Ajanta is a UNESCO World Heritage Site and
   attracts tourists from all over the world.
           </p>
        </div>
    </div>
  )
}

export default Ajantacanvas

