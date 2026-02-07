import React, { useEffect, useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";


const Products = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (

        <div className='w-11/12 mx-auto py-8 md:py-20'>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-start mb-10">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 items-center justify-center pb-10">
                {
                    items.map(product => (
                        <div key={product.id} className='w-full h-auto border border-gray-200 rounded-3xl overflow-hidden flex flex-col items-center m-6'>
                            <img src={product.img} alt={product.productName} className='w-full h-60 object-cover' />
                            <div className='w-full flex flex-col items-start p-5'>
                                <h4 className='text-xs font-semibold text-black/40'>{product.brand}</h4>
                                <h3 className='text-md font-semibold text-black/70 truncate'>{product.productName}</h3>
                                <div className='flex gap-8 items-center text-sm text-gray-400 py-2'>
                                    <p style={{ fontFamily: '"Bangers", system-ui', fontWeight: 700 }}><span className='text-orange-400'>SSS</span>SSS</p>
                                    <p>{product.stoke}</p>
                                </div>
                                <p className='text-black/50 '>By <span className='text-[#3BB77E]'>{product.poweredBy}</span></p>
                                <div className='w-full flex items-center justify-between pt-2'>
                                    <p className='text-md text-[#3BB77E] font-semibold'>${product.currentPrice} <span className='text-sm line-through text-black/30'>${product.oldPrice}</span> </p>
                                    <button className='flex items-center gap-1 w-fit bg-[#61e7a83f] text-sm text-[#3BB77E] py-1 px-2 rounded mt-2'><TiShoppingCart />Add</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products
