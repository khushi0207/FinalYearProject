import React, { use, useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/shopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const login = () => {

  const [currentState,setCurrentState] = useState('Login')
  const{token, setToken, navigate, backendURL} = useContext(shopContext)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')


  const handleAuth = async(event)=>{
      event.preventDefault();
      try {
        if(currentState === 'Sign Up'){
            const response = await axios.post(backendURL+'/api/user/register',{name,email,password})
            if(response.data.success){
              setToken(response.data.token)
              localStorage.setItem('token',response.data.token) 
              toast.success('Registration successful!')
              
            }else{
              toast.error(response.data.message)
            }
            
        }else if(currentState === 'Login'){
            const response = await axios.post(backendURL+'/api/user/login',{email,password})
            if(response.data.success){
              setToken(response.data.token)
              localStorage.setItem('token',response.data.token)
            }
            else{
              toast.error(response.data.message)
            }
        }

      } catch (error) {
        console.log(error);
        toast.error(error.message)
        
      }
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={handleAuth} className='flex flex-col items-center w-[90%] sm:max-w-110 m-auto mt-14 gap-4 text-gray-800 bg-amber-100 p-4  border-4 border-amber-200 rounded-md'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10 '>
        <p className='prata-regular font-serif text-3xl '>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState === "Login" ? "" :<input onChange={(e)=>setName(e.target.value)} value={name} className='w-full px-3 py-2 border border-zinc-800' type='text' placeholder='Name:' required/>}
      <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-zinc-800' type='email' pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" placeholder='Email Address:'required/>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full px-3 py-2 border border-zinc-800' type='password' placeholder='Password:'required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        {/*<p className='cursor-pointer'>Forget password?</p>*/}
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
