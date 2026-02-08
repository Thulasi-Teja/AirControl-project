import React, { useEffect, useState } from 'react'

function Passenger() { 
  const [success,setSuccess]=useState(false)
  const [error,setError]=useState("")

  const[passenger,setPassenger]=useState(()=>{
    return localStorage.getItem("passenger") ||"";
  });
  const [email,setEmail]=useState(()=>{
    return localStorage.getItem("email") ||"";
  });
  const [number,setNumber]=useState(()=>{
    return localStorage.getItem("number") ||""
  });

  useEffect(()=>{
     localStorage.setItem("passenger",passenger);
  },[passenger]);
  
  useEffect(()=>{
    localStorage.setItem("email",email);
  },[email]);
  
  useEffect(()=>{
    localStorage.setItem("number",number);
  },[number]);
  
  const handleSubmit = (e) =>{
    e.preventDefault();

  if(passenger === "" || email === "" || number === ""){
     setSuccess(false)
     setError("Please fill the form")
     return;
  }
  setSuccess(true);
  setError("")
  }
  return (
    
    <div className='bg-slate-300 font-serif min-h-screen flex justify-center items-center pt-4 pb-6'>
        <div className='bg-slate-400 rounded-lg w-72  p-6 shadow-md shadow-black '>
          
           <h2 className='text-center mt-2 text-xl font-bold mb-6'>Passenger Details</h2> 
            <form className='mt-2' onSubmit={handleSubmit}>
                
          <label htmlFor="text">Passenger Name </label>
          <input className='w-full rounded-md mt-2 mb-2
           hover:bg-slate-200 bg-white text-black  py-1 '
           type="text" 
           placeholder='Enter Name'
           value={passenger}
           onChange={(e)=>setPassenger(e.target.value)}
           />

          <label htmlFor="email">Email </label>
          <input className='w-full rounded-md mt-2 mb-2
           hover:bg-slate-200 bg-white text-black  py-1 '
           type="email" 
           placeholder='Enter email'
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           />

          <label htmlFor="phonenumber">Phone number </label>
          <input className='w-full rounded-md mt-2 mb-2 
           hover:bg-slate-200 bg-white text-black py-1'
           type="number" 
           placeholder='Enter phone number'
           value={number}
           onChange={(e)=>setNumber(e.target.value)}
           />

          <button className='w-full rounded-md mt-3 
           bg-blue-950 text-white py-1 hover:bg-blue-900'
          type='submit'>Confirm Booking</button>
            </form>  
          {success && <p className='mt-3 text-xl'>Confirm Booking</p>}
          {error && <p className='mt-3'>{error}</p>}
        </div>

    </div>
  )
}

export default Passenger