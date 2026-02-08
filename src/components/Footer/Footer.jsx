import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (  
      <footer className=' font-serif'>
           <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 bg-slate-500 text-black'>
            <div className='md:flex md: justify-between'>
              <div className='mb-6 md:mb-0'> 
                <Link to='/' className='flex items-center' >
                  <img className='ml-2 h-20 rounded-full'
                  src="./logo2.png" alt="logo" />
                </Link>
              </div>
              <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 '>
                 <div>
                  <h2 className='mb-6 text-sm font-semibold uppercase'>Resources</h2>
                  <ul className='font-medium'>
                     <li className='mb-4'>
                         <Link to='/' className='hover:underline hover:text-slate-200 duration-200'>
                           Home </Link>
                     </li>
                     <li className='mb-4'>
                         <Link to='/Flights'className='hover:underline hover:text-slate-200 duration-200' >
                         Flights </Link>
                     </li>
                     <li>
                         <Link to='/Booking' className='hover:underline hover:text-slate-200 duration-200' >
                         Booking </Link>
                     </li>
                  </ul>
                 </div>
                  
                  <div>
                     <h2 className='mb-6 text-sm font-semibold uppercase'>
                        Follow us</h2>
                     <ul className='font-medium'>
                        <li className='mb-4'>
                           <Link to='/' className='hover:underline hover:text-slate-200 duration-200'>
                           Github</Link>
                        </li>
                        <li className='mb-4'>
                           <Link to='/' className='hover:underline hover:text-slate-200 duration-200'>
                           Discord</Link>
                        </li>
                     </ul> 
                  </div>
                  <div>
                     <h2 className='mb-6 text-sm font-semibold uppercase'>
                        Legal</h2>
                     <ul className='font-medium'>
                        <li className='mb-4'>
                           <Link to='/' className='hover:underline hover:text-slate-200 duration-200'>Privacy Policy</Link>
                        </li>
                        <li className='mb-4'>
                           <Link to='/' className='hover:underline hover:text-slate-200 duration-200'>Terms & Conditions</Link>
                        </li>
                     </ul>
                  </div>
              </div>
            </div>
            <hr className='my-6 sm:mx-auto lg:my-8' />
            <div className='sm:flex sm:items-center sm:justify-between'>
               <span className='text-sm sm:text-center'>
                   @Copyright 2025
                  <a href="https://aircontrol.com/"
                    className='hover:underline'> AirControl 
                  </a>
                  .All Rights Reserved.
               </span>
            </div>
           </div>
      </footer>
  )
}
export default Footer


