import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='bg-slate-300 pt-2 pb-4 font-serif '>
      <div className=' grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-400 sm:ml-8 ml-6 mt-16
    mb-5 py-6 px-4 rounded-2xl justify-center items-center shadow-lg shadow-black w-[95%] '>
       <div className='h-44.5 items-center justify-center text-center sm:ml-25 w-[90%]
       md:ml-15 ml-9 sm:text-lg text-lg  rounded-xl  text-black'>
        <h1 className='font-bold mb-4 mt-4 text-2xl'>AirControl</h1>
         <p className='text-xl mb-6'>Flights typically cruise at 10-11 km altitude with 
            outside temperatures around -51^\circ C, 
            while at any moment, nearly 10,000 planes are in 
            the air. Pilots often sleep during long-haul flights 
            in dedicated, hidden bunks. Unique spots 
            include Scotland'sBarra airport, where the runway is 
            on the beach and tides dictate landing times.</p>
      </div>
      <div>
         <img className='sm:mr-25 w-[90%] ml-9
       md:mr-15 mr-10  rounded-2xl shadow-xl shadow-black'
          src="./flight-img3.jpg" alt="airplane photo" />
      </div>
     </div>

     <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-400 w-[85%]
     mt-24 sm:mb-5 ml-14  py-6 rounded-2xl justify-center items-center shadow-lg shadow-black '> 
       <div className='mb-6 relative w-72 h-72 sm:ml-28 ml-14 md:mr-16 mr-2 ' >

        <img className='absolute w-full h-full top-6 left-6  object-cover rounded-xl shadow-md'
         src="airplane3.jpg" alt="airplane-photo1" />

        <img className='absolute top-0 left-0 w-full h-full z-10 object-cover rounded-xl '
        src="airplan2img.jpg" alt="airplane-photo2" />
        
        <img className='absolute top-3 left-3 w-full h-full  object-cover rounded-xl '
        src="airplane.jpg" alt="airplane-photo2" />
       </div>

       <div className='mt-3 h-44.5  py-5 items-center justify-center 
       text-center mr-10 ml-8 sm:text-lg text-lg rounded-2xl '>
        <h2 className='px-2'>View available destinations,choose what you like and enjoy your journey</h2>
        <Link
         to='/Explore'
         className='bg-gray-900 text-white inline-block mt-2 px-2 py-2 
         rounded-2xl hover:bg-gray-600 shadow-md shadow-black' >
        Check-Out
        </Link>
       </div>
     </div>
     
     <div className=' mt-24 mb-20 ml-8 mr-2 py-2 px-1 
     rounded-xl shadow-lg shadow-black sm:w-[80%]  '>

      <div className='grid grid-cols-3 gap-3 pr-6' >

         <img className='col-span-1 ml-2 rounded-3xl shadow-sm shadow-black' 
         src="offer11.jpg" alt="offer11" />

         <img className='col-span-1 ml-1  rounded-3xl shadow-sm shadow-black'
         src="offer4.png" alt="offer4" />

         <img className='col-span-1 rounded-3xl shadow-sm shadow-black ' 
         src="offer7.png" alt="offer7" />

         <img className='row-span-2 rounded-3xl shadow-sm shadow-black mt-3 lg:ml-4' 
         src="offer10.jpg" alt="offer10" />

         <img className='col-span-2 lg:ml-6 rounded-3xl shadow-sm shadow-black' 
         src="offer6.png" alt="offer6" />
      </div>
     </div>

     <div className='bg-slate-400 rounded-3xl shadow shadow-black 
     w-[90%] justify-center items-center text-center grid grid-cols-12 
     gap-3 py-6 px-2 ml-4 mb-10'>

         <div className='col-span-4 rounded-full sm:ml-10 shadow-md sm:w-[75%] shadow-black'>
            <Link to='/Bangkok'>
              <img className='rounded-full shadow-lg shadow-black'
              src="Bangkok1.webp" alt="Bangkok" />
            </Link>
         </div>

         <div className='col-span-4 sm:w-[75%] sm:ml-5 rounded-full shadow-md shadow-black'>
            <Link to='/kolkata'>
              <img className='rounded-full shadow-lg shadow-black '
              src="kolkata1.2.jpg" alt="kolkata" />
            </Link>
         </div>   

         <div className='col-span-4 rounded-full shadow-md sm:w-[75%] shadow-black'>
            <Link to='/Kochi'>  
              <img className='rounded-full shadow-lg shadow-black'
              src="Kochi1.jpg" alt="Kochi1" />
            </Link>
         </div>   
     </div>
 </div>
  )
}
export default Home

// sm:h-[230px]         sm:w-[80%] sm:ml-4
              //  h-[100px] md:h-[200px]