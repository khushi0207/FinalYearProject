import React from 'react'
import Title from "../components/title"
import {assets} from "../assets/assets"

const aboutUs = () => {
  return (
    <div>
      <div className=' flex flex-col text-2xl text-center pt-8 border-t'>
        {/*------------ABOUT US PAGE --------------------- */}
        <Title text1={"ABOUT "} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.logo} alt='aboutUs' className='w-full md:max-w-[450px] border border-x-5 border-y-2 rounded-full border-b-fuchsia-600 border-t-blue-800 border-l-fuchsia-900 border-r-purple-500'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-zinc-600'>
          <p><b className='font-serif text-rose-800'>Welcome to Kharizma,</b>your ultimate destination for premium multi-brand beauty products curated for both men and women. We believe that beauty is more than just skin deep—it's an expression of confidence, individuality, and self-care.</p>
         <Title text1={"OUR "} text2={"MISSION"}/>
          <p>At Kharizma, we strive to bring you the best in beauty, skincare, haircare, and grooming essentials from top global brands. Our mission is to empower individuals to embrace their unique beauty while providing high-quality, authentic, and trendsetting products that cater to every style and need.</p>
        </div>
      </div>
      <div>
        <br/>
        {/*-----------Why Choose Kharizma?---------------------- */}
        <Title text1={"Why Choose"} text2={" Kharizma?"}/>
          <p>✨ Curated Selection – We handpick only the finest beauty products to ensure quality and effectiveness.</p>
          <p>✨ For Everyone – Whether you're looking for bold makeup, gentle skincare, or high-performance grooming products, we have something for both men and women.</p>  
          <p>✨ Authenticity Guaranteed – Say goodbye to fakes! We promise 100% original products from trusted brands.</p>  
          <p>✨ Inclusive Beauty – We celebrate diversity and offer products that suit every skin tone, type, and preference.</p> 
          <p>✨ Seamless Shopping Experience – Our easy-to-navigate online store makes beauty shopping effortless and enjoyable.</p>
           <br/>
           {/*---------------OUR PROMISE------------------- */}
            <Title text1={"OUR"} text2={" PROMISE"}/>
            <p>At Kharizma, we don’t just sell beauty products—we inspire confidence, strength, 
              and self-love. Whether you’re going for a natural everyday look or a bold, head-turning style,
               we’re here to help you shine in your own way.</p>
               <br/>
               <Title text1={"Stay"} text2={" Connected"}/>
            <p>Join the Kharizma family and stay updated with the latest trends, exclusive deals, and beauty tips.
              Follow us on social media and be part of a community that celebrates beauty with confidence!</p><br/>
            <p>✨ Because beauty isn’t just about looking good—it’s about feeling powerful. Welcome to Kharizma! ✨</p>
      </div>
    </div>
  )
}

export default aboutUs
