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
    const [sortOrder, setSortOrder] = useState('relevant');

    useEffect(() => {
        setFilterProducts(products);
    }, [products]);

    useEffect(() => {
        let filteredProducts = products;

        if (selectedCategories.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                selectedCategories.includes(product.category)
            );
        }

        if (selectedTypes.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                selectedTypes.includes(product.type)
            );
        }

        // Sorting logic
        if (sortOrder === 'low-high') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'high-low') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        setFilterProducts(filteredProducts);
    }, [selectedCategories, selectedTypes, sortOrder, products]);

    const handleCategoryChange = (category) => {
        setSelectedCategories(prev => 
            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        );
    };

    const handleTypeChange = (type) => {
        setSelectedTypes(prev => 
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };

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
                        {['Makeup', 'Skincare', 'Body & Bath Care', 'Hair', 'Fragrance', 'Beard Care'].map(category => (
                            <p key={category} className='flex gap-2'>
                                <input
                                    className='w-3'
                                    type='checkbox'
                                    value={category}
                                    onChange={() => handleCategoryChange(category)}
                                />
                                {category}
                            </p>
                        ))}
                    </div>
                </div>
                {/* Sub category */}
                <div className={`border border-zinc-700 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-zinc-700 px-1 mx-2'>
                        {['Moisturizer', 'Serum', 'Body Wash', 'Sunscreen'].map(type => (
                            <p key={type} className='flex gap-2'>
                                <input
                                    className='w-3'
                                    type='checkbox'
                                    value={type}
                                    onChange={() => handleTypeChange(type)}
                                />
                                {type}
                            </p>
                        ))}
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
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
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