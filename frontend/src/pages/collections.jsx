import React, { useContext, useEffect, useState } from 'react';
import { shopContext } from '../context/shopContext';
import { assets } from '../assets/assets';
import Title from '../components/title';
import ProductItem from '../components/productItems';

const Collections = () => {
    const { products } = useContext(shopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    
    

    const handleCategories = (e)=>{
        if(selectedCategories.includes(e.target)){
            setSelectedCategories(prev => prev.filter(item => item !== e.target.value));
        }
        else{
            setSelectedCategories(prev => [...prev, e.target.value]);
        }
    }

    const handleSubCategories = (e)=>{
        if(selectedTypes.includes(e.target)){
            setSelectedTypes(prev => prev.filter(item => item !== e.target.value));
        }
        else{
            setSelectedTypes(prev =>[...prev,e.target.value])
        }
    }
    useEffect(() => {
        setFilterProducts(products);
    }, [products]);


   const handleFilterChange = () =>{
    let productCopy = products.slice();
    if(selectedCategories.length > 0 ){
       // productCopy = productCopy.filter(item => selectedCategories.includes(item.target.value))
    }
    setFilterProducts(productCopy)
   }

   useEffect(()=>{
    setFilterProducts(products);
   },[])
   useEffect(()=>{
    handleFilterChange();
   },[selectedCategories,selectedTypes])

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
                            <input className='w-3' type='checkbox' value={'Makeup'} onChange={handleCategories}/>Makeup
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Skincare'}onChange={handleCategories}/>Skincare
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Bath & Body wash'} onChange={handleCategories}/>Bath & Body wash
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Hair'}onChange={handleCategories}/>Hair
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Fragrance'} onChange={handleCategories}/>Fragrance
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Beard Care'}onChange={handleCategories}/>Beard Care
                        </p>
                    </div>
                </div>
                {/* Sub category */}
                <div className={`border border-zinc-700 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-zinc-700 px-1 mx-2'>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Moisturizer'}onChange={handleSubCategories}/>Moisturizer
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Sunscreen'}onChange={handleSubCategories}/>Sunscreen
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Serum'} onChange={handleSubCategories}/>Serum
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Body Wash'} onChange={handleSubCategories}/>Body Wash
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Toner'} onChange={handleSubCategories}/>Toner
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Face mask'} onChange={handleSubCategories}/>Face mask
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Face Sheet'}onChange={handleSubCategories}/>Face sheet
                        </p>
                    </div>
                </div>
            </div>
            {/* Right side */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={'COLLECTIONS'} />
                    {/* Sort */}
                    <select
                        className='border-2 border-blue-800 rounded-md right-8 m-5 text-sm px-2'
                        >
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: low-high</option>
                        <option value="high-low">Sort by: high-low</option>
                        <option value="Customer review">Sort by: Customer review</option>
                    </select>
                </div>
                {/* Map products */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                        filterProducts.map((item, index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Collections;