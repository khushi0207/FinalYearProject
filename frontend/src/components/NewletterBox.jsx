import React from 'react'

const NewletterBox = () => {
    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-zinc-800'>Subscribe now & get 20% off</p>
      <p className='text-zinc-800 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos.</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" placeholder="Enter your email" className="w-full sm:flex-1 outline-none"/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUSCRIBE</button>
      </form>
        
    </div>
  )
}

export default NewletterBox
