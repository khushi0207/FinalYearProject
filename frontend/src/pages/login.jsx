import React, { useState } from 'react'

const login = () => {

  const [currentState,setCurrentState] = useState('Login')
  const handleAuth = async(event)=>{
      event.preventDefault();
  }

  return (
    <form onSubmit={handleAuth} className='flex flex-col items-center w-[90%] sm:max-w-110 m-auto mt-14 gap-4 text-gray-800 bg-amber-100 p-4  border-4 border-amber-200 rounded-md'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10 '>
        <p className='prata-regular font-serif text-3xl '>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState === "Login" ? "" :<input className='w-full px-3 py-2 border border-zinc-800' type='text' placeholder='Name:' required/>}
      <input className='w-full px-3 py-2 border border-zinc-800' type='email' placeholder='Email Address:'required/>
      <input className='w-full px-3 py-2 border border-zinc-800' type='password' placeholder='Password:'required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forget password?</p>
        {
          currentState === "Login" ?
          <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Don't have an account?</p>
          :<p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === "Login"? "Sign In":"Sign Up"}</button>
    </form>
  )
}

export default login
