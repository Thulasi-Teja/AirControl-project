import React, { useState } from 'react'
import flightsData  from "../../Data/flightsData.json";

function Status() {
  const [flightno,setFlightno]=useState();
  const [result,setResult]=useState(null);
  const checkStatus = () => {
  const foundFlight = flightsData.find(
    (flightobj) =>
      flightobj.flight.toLowerCase() === flightno.trim().toLowerCase()
  );
  if (foundFlight) {
    setResult(foundFlight);
  } else {
    setResult({ error: "Flight not found" });
  }
};

  return ( 
  <div className='font-serif bg-slate-300 h-screen flex 
  justify-center items-center p-4 '>
        <div className='bg-slate-400 py-20 sm:w-[75%] rounded-lg 
        shadow-md shadow-black'>
          <h2 className='mb-4 text-center font-bold text-xl'>
      Find your flight</h2>
        <div className='mt-6 '>
            <label className='lg:ml-16 ml-3'
            htmlFor="flightno.">Flight no : </label>
            <input className='w-[30%] sm:w-[25%] rounded-md shadow-sm shadow-black hover:bg-slate-200 cursor-pointer '
            type="text" 
            value={flightno} 
            onChange={(e)=>setFlightno(e.target.value)}/>
         </div>
        <button className=' ml-20 mt-6 lg:ml-96 bg-slate-900 text-white py-2 px-2 rounded-lg shadow-sm shadow-black hover:bg-slate-800 cursor-pointer '
          onClick={checkStatus} 
           type='button'>  
            Status 
             </button>
        {result && ( 
          <div className='ml-6 mt-4'>
            <p>Flight:{result.flight}</p>
            <p>From :{result.from}</p>
            <p>To :{result.to}</p>
            <p>Status :{result.status}</p>
          </div> 
           )
        } 
     </div> 
  </div> 
  )
}
export default Status

