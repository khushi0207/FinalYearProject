import React, { use, useContext, useEffect, useState } from 'react';
import { shopContext } from '../context/shopContext';
import { assets } from '../assets/assets';
import Title from '../components/title';
import ProductItem from '../components/productItems';

const Collections = () => {
    const { products,search, showSearch  } = useContext(shopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortTye,setSortType] = useState('relevant')
    

    // function to handle filter
   const handleCategory = (e) =>{
    if(category.includes(e.target.value)){
        setCategory(prev=>prev.filter(item =>item!==e.target.value));
    }
    else{
        setCategory(prev=>[...prev,e.target.value]);
    }
   } 

   // function to handle types 
   const handleSubCategory = (e) =>{
    if(subCategory.includes(e.target.value)){
        setSubCategory(prev=>prev.filter(item =>item!==e.target.value));
    }
    else{
        setSubCategory(prev=>[...prev,e.target.value]);
    }
   } 


   // function to handle applyfilter

   const handleApplyFilter = () =>{
    let productsCopy= products.slice();
    if(showSearch &&search){
        productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    // filters category
    if(category.length>0){
        productsCopy = productsCopy.filter(item=> category.includes(item.category));
    }
    if(subCategory.length > 0){
        productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy)
    //console.log(productsCopy)
   }

   const handleSortProduct = ()=>{
    let filterProductsCopy = filterProducts.slice();
    switch(sortTye){
        case 'low-high':
            setFilterProducts(filterProductsCopy.sort((a,b)=>(a.price - b.price)));
            break;    

        case 'high-low':
            setFilterProducts(filterProductsCopy.sort((a,b)=>(b.price - a.price)));
            break;
        case 'Customerreview':
            setFilterProducts(filterProductsCopy.sort((a,b)=>(b.rating - a.rating)));
            break;
        default:
            handleApplyFilter();
            break;
    }

   }
   // useEffect to handle search
   useEffect(()=>{
    handleApplyFilter()
   },[category,subCategory,search,showSearch,products ])

   // useEffect to sorting
   useEffect(()=>{
    handleSortProduct();
   },[sortTye])


    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* Filter option */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
                    FILTERS
                    <img src={assets.dropdown} alt='' className={`h-5 sm:hidden ${showFilter ? 'rotate-180' : ''}`} />
                </p>
                {/* Category filter */}
                <div className={`border border-zinc-700 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-zinc-700'>
                    <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Makeup'} onChange={handleCategory}/>Makeup
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Skincare'} onChange={handleCategory}/>Skincare
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'BodyBathCare'} onChange={handleCategory}/>Body & Bath Care
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Hair'} onChange={handleCategory}/>Hair
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Fragnance'} onChange={handleCategory}/>Fragnance
                        </p>
                       
                    </div>
                </div>
                {/* Sub category */}
                <div className={`border border-zinc-700 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-zinc-700 px-1 mx-2'>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Moisturizer'} onChange={handleSubCategory}/>Moisturizer
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'serum'} onChange={handleSubCategory}/>Serum
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'bodyWash'} onChange={handleSubCategory}/>BodyWash
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'sunscreen'} onChange={handleSubCategory}/>Sunscreen
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'toner'} onChange={handleSubCategory}/>Toner
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'srub'} onChange={handleSubCategory}/>Srub
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'faceSheet'} onChange={handleSubCategory}/>Face sheet
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'faceMask'} onChange={handleSubCategory}/>Face Mask
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'lipstick'} onChange={handleSubCategory}/>Lipstick
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'lipbalm'} onChange={handleSubCategory}/>Lipbalm
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Shampoo'} onChange={handleSubCategory}/>Shampoo
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Perfume'} onChange={handleSubCategory}/>Perfume
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Showergel'} onChange={handleSubCategory}/>Shower Gel
                        </p>
                        
                    </div>
                </div>
            </div>
            {/* Right side */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={'COLLECTIONS'} />
                    {/* Sort */}
                    <select onChange={(e)=>setSortType(e.target.value)}
                        className='border-2 border-blue-800 rounded-md right-8 m-5 text-sm px-2'>
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: low-high</option>
                        <option value="high-low">Sort by: high-low</option>
                       {/* <option value="Customerreview">Sort by: Customer review</option>*/}
                    </select>
                </div>
                {/* Map products */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                        filterProducts.map((item, index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} rating={item.rating} reviews={item.reviews} price={item.price} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Collections;