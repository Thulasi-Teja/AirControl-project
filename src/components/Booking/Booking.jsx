import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Booking() {

  const navigate=useNavigate();
  const [error,setError]=useState("");
  const [from,setFrom]=useState("");
  const [to,setTo]=useState("");
  const [passenger,setPassenger]=useState("");
  const [pay,setPay]=useState("");
  const [classes,setClasses]=useState("");
  const [trip,setTrip]=useState("")
   
  const handleBooking = (e) => {
       e.preventDefault()

    if(!trip || !from.trim()|| !to.trim() || !passenger || !pay || !classes){
      setError("Please fill all the fields")
      return;
    }   
    setError("")
   navigate("/Passenger");
  }

  return (
    <div className='bg-slate-300 font-serif h-screen flex 
    justify-center items-center p-4 '>
      <div className='bg-slate-400 sm:w-[75%] p-8 rounded-xl shadow-md shadow-black '>
      
    <form onSubmit={handleBooking}>
      <div className='mb-6 flex gap-2'>
       <label>
              <input
                type="radio"
                name="trip"
                value="oneway"
                onChange={(e) => setTrip(e.target.value)}
              />{" "}
              One way
      </label>
       <label>
          <input 
          type="radio" 
          name='trip'
          value="round"
          onChange={(e)=>setTrip(e.target.value)}/>{""}
          Round-trip
    </label>
      <label>
          <input 
          type="radio" 
          name='trip'
          value="multiway"
          onChange={(e)=>setTrip(e.target.value)} />{""} 
          Multi-trip
    </label>
      </div>

      <div className='mb-4'>
          <label className=' lg:ml-20 text-lg' 
          htmlFor="from">From : </label>
          <input className='w-[30%] lg:w-[20%] py-1 rounded-lg shadow-sm shadow-black ' 
          type="text" 
          placeholder='search here'
          value={from}
          onChange={(e)=>setFrom(e.target.value)}
          />

          <label className='ml-8 lg:ml-36 text-lg ' 
          htmlFor="to">To : </label>
          <input className='w-[30%] lg:w-[20%] py-1 rounded-lg shadow-sm shadow-black' 
          type="text"
          placeholder='search here'
          value={to}
          onChange={(e)=>setTo(e.target.value)}
          />
      </div>

      <div>   
          <label className='text-lg mt-2' 
          htmlFor="passengers">Passengers : </label>
           <select className='rounded-lg py-1'
           value={passenger}
           onChange={(e)=>setPassenger(e.target.value)}
           >
            <option value="">Select</option>
            <option value="Adult">Adult</option>
            <option value="Senior Citizen">Senior Citizen</option>
            <option value="Childern">Childern</option>
            <option value="Infant">Infant</option>
           </select>
       </div>

       <div className='mt-4 text-lg'>           
          <label className='mr-1' 
           htmlFor="class">Class : </label>

           <select className='rounded-lg py-1 sm:w-[20%] w-[37%]'
            value={classes}
           onChange={(e)=>setClasses(e.target.value)}
           >
            <option value="">Select</option>
            <option value="Economy class">Economy class</option>
            <option value="Premium Economy class"> Premium Economy class</option>
            <option value="Business class">Business class</option>
            <option value="First class">First class</option>
           </select>

           <label className='text-lg ml-2 lg:ml-20' 
           htmlFor="pay">Pay With : </label>
           <select className='rounded-lg py-1'
            value={pay}
           onChange={(e)=>setPay(e.target.value)}
           >
            <option value="">Select</option>
            <option value="Cash">Cash</option>
            <option value="UPI">UPI</option>
            <option value="Net Banking">Net Banking</option>
           </select>
       </div>
         {error && <p className='mt-4'>{error}</p>}
       <div className='mt-4'>
       <button type='submit' className='bg-slate-900 text-white py-2 px-2 rounded-lg shadow-sm
        shadow-black hover:bg-slate-800 cursor-pointer ml-20 lg:ml-80'>
        Confirm Booking
        </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Booking