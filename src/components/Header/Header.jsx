import React from 'react'
import { useState ,useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [flight,SetFlights]=useState(false)

  return (
     
   <header className='shadow sticky z-50 top-0 font-serif'>
   <nav className='bg-slate-500 text-black border-gray-200 px-4 lg:px-6 py-2'>
     <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
     <div>
      <Link to="/"> 
      <img src='./logo2.png' 
      alt='airline logo'
      className='mr-10 h-20 rounded-full ml-1' />
      </Link>
     </div>
     <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
      <ul className='flex mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
        
        <li>
          <NavLink 
          to="/"
          end 
          className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 hover:border-b 
          ${isActive ? "text-slate-200":" text-black"} lg:hover:bg-transparent lg:border-0 
          hover:text-slate-200 lg:p-0`} >
              Home
          </NavLink>
            </li>
        <li className='relative '>
          <button onClick={()=> SetFlights(prev =>!prev)}
          className="block sm:py-0 md:py-0 py-2 pr-2 pl-2 duration-200 hover:border-b hover:text-slate-200">
              Flights
          </button>
          {flight && (
              <div className='absolute bg-slate-100 top-14 left-0 shadow-sm shadow-black rounded-xl '>
            <ul className=' left-0 mt-2 w-40 '>
               <li onClick={()=> SetFlights(false)} className='px-4 py-2 hover:bg-gray-300 cursor-pointer'>
                <Link to='/BookTicket'>
                 BookTicket
              </Link>
               </li>
              <li onClick={()=>SetFlights(false)} className='px-4 py-2 hover:bg-gray-300 cursor-pointer'>
              <Link to='/FlightRoutes'>
                 Routes
              </Link>
              </li>
              <li onClick={()=>SetFlights(false)} className='px-4 py-2 hover:bg-gray-300 cursor-pointer'>
              <Link to='/Booking'>
                 Booking
              </Link>
              </li>
             </ul>
              </div>
          )}
            </li>
        <li>
          <NavLink to="/Status"
          className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 hover:border-b 
          ${isActive ? "text-slate-200":" text-black"} lg:hover:bg-transparent lg:border-0 
          hover:text-slate-200 lg:p-0`} >
              Status
          </NavLink>
            </li>
        <li>
          <NavLink to="/Login"
          className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 hover:border-b 
          ${isActive ? "text-slate-200":" text-black"}  lg:hover:bg-transparent lg:border-0 
          hover:text-slate-200 lg:p-0`} >
              Log in
          </NavLink>
            </li>
      </ul>
    </div>
     </div>
   </nav>
   </header>
  )
}

export default Header




