import React from 'react'
import {Link} from 'react-router-dom'

function Mysuru() {
  return (
    <div className='bg-slate-300 pt-4 pb-6 font-serif '>
        <div className='bg-slate-400 w-[80%] text-black rounded-xl
         sm:m-6 ml-12 sm:ml-24 py-4 shadow-lg shadow-black '>
          <h2 className='text-xl ml-8 mb-4 '>Mysuru</h2>
        <Link to='/Mysuru'>
        <img className='rounded-xl w-[60%] ml-16 sm:ml-24 shadow-lg shadow-black  '
        src="Mysurupalace1.1.jpg" alt="Mysuru" />
        </Link>
        <p className='ml-6 mt-4 py-2 px-2' >
          Mysuru Palace is a grand royal palace in Karnataka and a symbol 
          of rich heritage. The palace is famous for its stunning architecture 
          and special lighting during festivals like Dussehra. </p>
        </div>
    </div>
  );
}

export default Mysuru