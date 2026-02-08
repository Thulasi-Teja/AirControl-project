import React from 'react'
import { Link } from 'react-router-dom'

function Flights() {
  return (
    <div className='bg-slate-300 font-serif w-[full] grid 
    grid-cols-2 sm:grid-cols-12 gap-x-6 justify-center items-center '>

      <div className="h-screen sm:w-60 w-52 bg-slate-500 text-black 
      p-6 sm:col-span-4">

      <div className="text-2xl font-bold mb-8">
        AirControl
      </div>
      <ul className="space-y-5">
        <li>
          <Link to="/FlightRoutes" className="block hover:text-white">
            Flight Route
          </Link>
        </li>
        <li>
          <Link to="/BookTicket" className="block hover:text-white">
           How to Book
          </Link>
        </li>
        <li>
          <Link to="/Status" className="block hover:text-white">
            Status
          </Link>
        </li>
      </ul> 
    </div>
    <div className='sm:col-span-8 p-0 sm:p-6 mr-0 lg:mr-36 '>
      <img className='sm:w-full  w-[250px] shadow-lg  shadow-black max-w-3xl'
       src="flights-img2.jpg" alt=" flight-photo" />
    </div>
    </div>

    
  )
}

export default Flights


