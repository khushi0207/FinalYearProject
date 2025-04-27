import React, { use, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendURL } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const[name,setName] = useState('')
  const[description,setDescription] = useState('')
  const [brand,setBrand] = useState('')
  const[category, setCategory] = useState('Makeup')
  const[subCategory,setSubCategory] = useState('select')
  const [bestseller,setBestseller] = useState(false)
  const [sizes,setSizes] = useState([]);
  const [price,setPrice] = useState('');

  const handlePriceChange =(e)=>{
    const value = e.target.value;
    if(value === ""|| parseFloat(value) >= 0){
      setPrice(value);
    }
  }

  const handleSubmit =async(e)=>{
    e.preventDefault();
    try {
      const formData = new FormData();
      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      formData.append('name', name);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));
      formData.append('price', price);
      formData.append('brand', brand);

      const response = await axios.post(backendURL + "/api/product/add",formData,{headers:{token:localStorage.getItem('token'),}});

      if(response.data.success){
        toast.success(response.data.message)
        toast.success("Product added successfully")
        setName('')
        setDescription('')
        setBrand('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setPrice('')
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gsp-3 w-full items-start'>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-1'>
          <label htmlFor='image1' >
            <img src={!image1 ? assets.upload : URL.createObjectURL(image1)} alt='img_upload 'className='border border-dotted border-purple-950 p-2 sm:w-35 md:w-40 lg:w-48 mx-5 my-4'/>
            <input onChange={(e)=>setImage1(e.target.files[0])} type='file'  id='image1' hidden/>
          </label>
          <label htmlFor='image2'>
            <img src={!image2 ? assets.upload : URL.createObjectURL(image2)} alt='img_upload 'className='border border-dotted border-purple-950 p-2 sm:w-35 md:w-40 lg:w-48 mx-5 my-4'/>
            <input onChange={(e)=>setImage2(e.target.files[0])} type='file'  id='image2' hidden/>
          </label>
          <label htmlFor='image3'>
            <img src={!image3 ? assets.upload : URL.createObjectURL(image3)} alt='img_upload ' className='border border-dotted border-purple-950 p-2 sm:w-35 md:w-40 lg:w-48 mx-5 my-4'/>
            <input onChange={(e)=>setImage3(e.target.files[0])} type='file'  id='image3' hidden/>
          </label>
        </div>
      </div>
      <div className='w-full'>
        <p className='mb-2'>product name </p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Product name: ' required/>
      </div>
      <div className='w-full'>
        <p className='mb-2'>product description </p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Product description: ' required/>
      </div>
      {/*----------------------------brand name ------------------------------ */}
      <div className='w-full'>
        <p className='mb-2'>brand name </p>
        <input onChange={(e)=>setBrand(e.target.value)} value={brand} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Brand name: ' required/>
      </div>
      {/*--------------------product category ------------------------------ */}
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product category</p>
          <select onChange={(e)=>setCategory(e.target.value)} value={category} className='w-full px-3 py-2'>
            <option value="Makeup">Makeup</option>
            <option value="Skincare">Skincare</option>
            <option value="BodyBathCare">Body & Bath Care</option>
            <option value="Hair">Hair</option>
            <option value="Fragnance">Fragnance</option>
          </select>
        </div>
              {/*--------------------product sub-category ------------------------------ */}
        <div>
          <p className='mb-2'>Product sub-category</p>
          <select onChange={(e)=>setSubCategory(e.target.value)} value={subCategory} className='w-full px-3 py-2'>
            <option value="Moisturizer">Moisturizer</option>
            <option value="serum">serum</option>
            <option value="bodyWash">bodyWash</option>
            <option value="sunscreen">sunscreen</option>
            <option value="toner">toner</option>
            <option value="srub">srub</option>
            <option value="faceSheet">faceSheet</option>
            <option value="faceMask">faceMask</option>
            <option value="lipstick">Lipstick</option>
            <option value="lipbalm">lipbalm</option>
            <option value="Shampoo">Shampoo</option>
            <option value="Perfume">Perfume</option>
            <option value="Showergel">Shower Gel</option>
          </select>
        </div>
        {/*--------------------product price--------------------- */}
        <div>
          <p className='mb-2'>product price</p>
          <input className='w-full px-3 py-2 sm:w-[120px]' onChange={handlePriceChange} value={price} type='number' min={0} placeholder='product price: '/>
        </div>
      </div>

        {/*--------------------product size--------------------- */}

      <div className='flex' >
        <p className='mb-2'>Product sizes</p>
        <div className='grid grid-cols-4 md:grid-cols-5 lg:flex gap-4 gap-y-6 px-4 mt-5 '>
          <div onClick={()=>setSizes(prev => prev.includes("5mg")? prev.filter(item => item !== "5mg"): [...prev,"5mg"] )}>
            <p className={`${sizes.includes("5mg")? "bg-pink-500":"bg-rose-200" } px-3 py-1 cursor-pointer`}>5mg</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("10mg")? prev.filter(item => item !== "10mg"): [...prev,"10mg"] )}>

            <p className={`${sizes.includes("10mg")? "bg-pink-500":"bg-rose-200" } px-3 py-1 cursor-pointer`}>10mg</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("12mg")? prev.filter(item => item !== "12mg"): [...prev,"12mg"] )}>

            <p className={`${sizes.includes("12mg")? "bg-pink-500":"bg-rose-200" } px-3 py-1 cursor-pointer`}>12mg</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("20mg")? prev.filter(item => item !== "20mg"): [...prev,"20mg"] )}>

            <p className={`${sizes.includes("20mg")? "bg-pink-500":"bg-rose-200" } px-3 py-1 cursor-pointer`}>20mg</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("50mg")? prev.filter(item => item !== "50mg"): [...prev,"50mg"] )}>

            <p className={`${sizes.includes("50mg")? "bg-pink-500":"bg-rose-200" } px-3 py-1 cursor-pointer`}>50mg</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("80mg")? prev.filter(item => item !== "80mg"): [...prev,"80mg"] )}>

            <p className={`${sizes.includes("80mg")? "bg-pink-500":"bg-rose-200" } px-3 py-1 cursor-pointer`}>80mg</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("100mg")? prev.filter(item => item !== "100mg"): [...prev,"100mg"] )}>

            <p className={`${sizes.includes("100mg")? "bg-pink-500":"bg-rose-200" } px-3 py-1 cursor-pointer`}>100mg</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("120mg")? prev.filter(item => item !== "120mg"): [...prev,"120mg"] )}>

            <p className={`${sizes.includes("120mg")? "bg-pink-500":"bg-rose-200" } px-3 py-1 cursor-pointer`}>120mg</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("150mg")? prev.filter(item => item !== "150mg"): [...prev,"150mg"] )}>

            <p className={`${sizes.includes("150mg")? "bg-pink-500":"bg-rose-200" } px-3 py-1 cursor-pointer`}>150mg</p>
          </div>
        </div>
        </div>

        {/*--------------------product bestseller --------------------- */}

        <div className='flex gap-2 mt-2'>
          <input onChange={()=>setBestseller(prev =>!prev)} checked={bestseller} type='checkbox' id='bestseller' />
          <label className='cursor-pointer' htmlFor='bestseller'>Add to BestSeller</label>
        </div>
      <button  type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
    </form>
  )
}

export default Add
