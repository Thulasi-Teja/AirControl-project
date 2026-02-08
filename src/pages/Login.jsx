import React, { useEffect, useState } from 'react'


function Login() {
  const [success,setSuccess]=useState(false);
  const [error,setError]=useState("")
  const[login,setLogin]=useState(()=>{
    return(localStorage.getItem("login")) || "";
  });
  const [password,setPassword]=useState(()=>{
    return(localStorage.getItem("password")) || "";
  });

  useEffect(()=>{
    localStorage.setItem("login",login)
  },[login])

  useEffect(()=>{
    localStorage.setItem("password",password)
  },[password])

  const handleBooking = (e) => {
    e.preventDefault();

    if(login === "" || password === ""){
      setSuccess(false);
      setError("Please fill the form");
      return;
    }
    setSuccess(true);
    setError("");
    console.log("Login Successful");
  }
  return (
    <div className='bg-slate-300 font-serif min-h-screen flex justify-center items-center pt-4 pb-6'>
        <div className='bg-slate-400 rounded-lg w-72 h-80 p-6 shadow-md shadow-black '>
          
           <h2 className='text-center mt-2 text-2xl font-bold mb-6'>Login</h2> 
            <form className='mt-2' onSubmit={handleBooking} >
          <label htmlFor="email">Email </label>
          <input className='w-full rounded-md mt-2 mb-2
           hover:bg-slate-200 bg-white text-black  py-1 '
          type="email"
          placeholder='Enter email'
          value={login}
          onChange={(e)=>setLogin(e.target.value)}
          />

          <label htmlFor="password">Password </label>
          <input className='w-full rounded-md mt-2 mb-2 
           hover:bg-slate-200 bg-white text-black py-1'
          type="Password"
          placeholder='Enter Password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <button className='w-full rounded-md mt-3 
           bg-blue-950 text-white py-1 hover:bg-blue-900'
           type='submit'> Login </button>
            </form>
          {success && <p className='mt-3 '> Login success</p>}
          {error && <p className='mt-3 '> {error} </p>}  
        </div>
    </div>
  )
}

export default Login