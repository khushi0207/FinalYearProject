import React from 'react'
import Title from '../components/title'
import { assets } from '../assets/assets'
const contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={"CONTACT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.logo} alt='contact'className=' md:max-w-[480px]' />
        <div className='flex flex-col justify-center items-start gap-6'>
          <Title text1={"OUR "} text2={"STORE"}/>
          <p className='text-base font-light mx-2 font-normal' >📍 Kharizma Beauty Store, Shop-01 ,Opp. Marine Lines, Mumbai - 400001, Maharashtra, India</p>
          <Title text1={"CUSTOMER "} text2={"SUPPORT"}/>
          <p className='text-base font-normal mx-2 '>📞 Phone: +91-XXXXXXXXXX</p>
          <p className='text-base font-normal mx-2'>📧 Email: support@kharizma.in</p>
          <p className='text-base font-normal mx-2'>🕒 Working Hours: Monday – Saturday | 10:00 AM – 7:00 PM (IST)</p>

        </div>
      </div>
    </div>
  )
}

export default contact
