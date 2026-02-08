import React from 'react'
import {Link} from "react-router-dom";

function Explore() {
  return (
    <div className='bg-slate-300 pt-2 pb-4 font-serif'>
        <div className=' 0 text-black mt-10 ml-14 rounded-2xl w-[80%] 
        sm:ml-20 text-center py-6 px-2  '> 
          <h2 className='text-xl '>choose what you like and Explore more....</h2>
         <p className='text-center'>Travel helps you relax, explore new places, and create 
            unforgettable memories. From nature and heritage to 
            cities and beaches, every destination has something 
            unique to offer. Pick a place you love and enjoy a smooth 
            and happy journey.</p>
            </div>
        
        <div className='bg-slate-400 text-black mt-10 mb-4 rounded-3xl w-[60%] sm:w-[75%]  py-6 ml-28 shadow-lg shadow-black '>
            <h1 className='font-bold text-2xl ml-4'>Historical Places</h1> 
        <h3 className='ml-5'>Let's Check out</h3>  
        <ul className=' grid grid-cols-1 sm:grid-cols-12'>
            <li className='col-span-6'>
                <h2 className='font-bold text-xl ml-20 mt-5'>Mysuru Palace</h2>
                <Link to='/Mysuru'>
                 <img className='rounded-2xl w-[90%] sm:w-[60%] sm:ml-32 ml-5 mb-10 mt-5 '
                  src="Mysurupalace1.jpeg" alt="Mysuru" />
                </Link>
            </li>
            <li className='col-span-6 '>  
                 <h2 className='font-bold text-xl ml-20 mt-5'>Ajanta Canvas </h2>
                <Link to='/Ajantacanvas'>
                 <img className='rounded-2xl w-[90%] sm:w-[60%] sm:ml-32 ml-5 mb-10 mt-5 '
                 src="ajantacanvas1.jpg" alt="Ajantacanvas" />
                </Link>
            </li>
        </ul>
        </div>    
        <div className='bg-slate-400 text-black mt-10 mb-4 rounded-3xl w-[60%] sm:w-[75%] py-6 px-2 ml-28 shadow-lg shadow-black '>
            <h1 className='font-bold text-2xl ml-4'> Hill Station</h1> 
        <h3 className='ml-5'>Let's Check out</h3>  
        <ul className=' grid grid-cols-1 sm:grid-cols-12'>
            <li className='col-span-6'>
                <h2 className='font-bold text-xl ml-20 mt-5'>Ooty</h2>
                <Link to='/Ooty'>
                 <img className='rounded-2xl w-[90%] sm:w-[60%] sm:ml-32 ml-5 mb-10 mt-5 '
                  src="ooty1.jpg" alt="Ooty" />
                </Link>
            </li>
            <li className='col-span-6'>  
                 <h2 className='font-bold text-xl ml-20 mt-5'>Darjeeling </h2>
                <Link to='/Darjeeling'>
                 <img className='rounded-2xl w-[90%] sm:w-[60%] sm:ml-32 ml-5 mb-10 mt-5 '
                 src="darjeeling1.jpg" alt="Darjeeling" />
                </Link>
            </li>
        </ul>
        </div>    
        <div className='bg-slate-400 text-black mt-10 mb-4 rounded-3xl w-[60%] sm:w-[75%] py-6 px-2 ml-28 shadow-lg shadow-black '>
            <h1 className='font-bold text-2xl ml-4'>Beaches</h1> 
        <h3 className='ml-5'>Let's Check out</h3>  
        <ul className=' grid grid-cols-1 sm:grid-cols-12'>
            <li className='col-span-6'>
                <h2 className='font-bold text-xl ml-20 mt-5'>Gokarna</h2>
                <Link to='/Gokarna'>
                 <img className='rounded-2xl w-[90%] sm:w-[60%] sm:ml-32 ml-5 mb-10 mt-5 '
                  src="gokarna1.jpg" alt="Gokarna" />
                </Link>
            </li>
            <li className='col-span-6'>   
                <h2 className='font-bold text-xl ml-20 mt-5'>Marina </h2>
                <Link to='/Marina'>
                 <img className='rounded-2xl w-[90%] sm:w-[60%] sm:ml-32 ml-5 mb-10 mt-5 '
                 src="marina-beach1.jpg" alt="Marina" />
                </Link>
            </li>
        </ul>
        </div>    
        <div className='bg-slate-400 text-black mt-10 mb-4 rounded-3xl w-[60%] sm:w-[75%] py-6 px-2 ml-28 shadow-lg shadow-black '>
            <h1 className='font-bold text-2xl ml-4'>Religious & Spirituals</h1> 
        <h3 className='ml-5'>Let's Check out</h3>  
        <ul className=' grid grid-cols-1 sm:grid-cols-12'>
            <li className='col-span-6'>
                <h2 className='font-bold text-xl ml-20 mt-5'>Varanasi</h2>
                <Link to='/Varanasi'>
                 <img className='rounded-2xl w-[90%] sm:w-[60%] sm:ml-32 ml-5 mb-10 mt-5 '
                  src="varanasi1.jpg" alt="Varanasi" />
                </Link>
            </li>
            <li className='col-span-6'>  
                 <h2 className='font-bold text-xl ml-20 mt-5'>Tirupathi </h2>
                <Link to='/Tirupathi'>
                 <img className='rounded-2xl w-[90%] sm:w-[60%] sm:ml-32 ml-5 mb-10 mt-5 '
                 src="tirupathi1.jpg" alt="Tirupathi" />
                </Link>
            </li>
        </ul>
        </div>   
        <div className='bg-slate-400 text-black mt-10 mb-4 rounded-3xl w-[60%] sm:w-[75%] py-6 px-2 ml-28 shadow-lg shadow-black '>
            <h1 className='font-bold text-2xl ml-4'>Modern & City Attractions </h1> 
        <h3 className='ml-5'>Let's Check out</h3>  
        <ul className=' grid grid-cols-1 sm:grid-cols-12'>
            <li className='col-span-6'>
                <h2 className='font-bold text-xl ml-20 mt-5'>Delhi</h2>
                <Link to='/Delhi'>
                 <img className='rounded-2xl w-[90%] sm:w-[60%] sm:ml-32 ml-5 mb-10 mt-5 '
                  src="delhi1.jpg" alt="Delhi" />
                </Link>
            </li>
            <li className='col-span-6'>  
                 <h2 className='font-bold text-xl ml-20 mt-5'>Bangalore</h2>
                <Link to='/Bangalore'>
                 <img className='rounded-2xl w-[90%] sm:w-[60%] sm:ml-32 ml-5 mb-10 mt-5 '
                 src="bangalore1.jpg" alt="Bangalore" />
                </Link>
            </li>
        </ul>
        </div>    
        <div className='bg-slate-400 text-black mt-10 mb-4 rounded-3xl w-[60%] sm:w-[75%] py-6 px-2 ml-28 shadow-lg shadow-black '>
            <h1 className='font-bold text-2xl ml-4'>Nature & Wildlife</h1> 
        <h3 className='ml-5'>Let's Check out</h3>  
        <ul className=' grid grid-cols-1 sm:grid-cols-12'>
            <li className='col-span-6'>
                <h2 className='font-bold text-xl ml-20 mt-5'>Periyar</h2>
                <Link to='/Periyar'>
                 <img className='rounded-2xl w-[90%] sm:w-[60%] sm:ml-32 ml-5 mb-10 mt-5 '
                  src="periyar1.jpg" alt="Periyar" />
                </Link>
            </li>
            <li className='col-span-6'>  
                 <h2 className='font-bold text-xl ml-20 mt-5'>Sundarbans </h2>
                <Link to='/Sundarbans'>
                 <img className='rounded-2xl w-[90%] sm:w-[60%] sm:ml-32 ml-5 mb-10 mt-5 '
                 src="sundarbans1.jpg" alt="Sundarbans" />
                </Link>
            </li>
        </ul>
        </div>      
        </div>
    
  )
}

export default Explore

