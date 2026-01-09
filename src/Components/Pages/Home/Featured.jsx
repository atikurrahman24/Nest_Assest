import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Featured() {

    const figure=[
        {image:"/Images/Figure-1.png", name:"Cake & Milk", stock:"23 Items", bg:"bg-[#F2FCE4]"},
        {image:"/Images/Figure-2.png", name:"Organic Kiwi", stock:"11 Items", bg:"bg-[#FFFCEB]"},
        {image:"/Images/Figure-3.png", name:"Peach", stock:"6 Items", bg:"bg-[#ECFFEC]"},
        {image:"/Images/Figure-4.png", name:"Red Apple", stock:"16 Items", bg:"bg-[#FEEFEA]"},
        {image:"/Images/Figure-5.png", name:"Snacks", stock:"10 Items", bg:"bg-[#FFF3EB]"},
        {image:"/Images/Figure-6.png", name:"Vegetables", stock:"10 Items", bg:"bg-[#FFF3FF]"},
        {image:"/Images/Figure-7.png", name:"Strawberry", stock:"22 Items", bg:"bg-[#F2FCE4]"},
        {image:"/Images/Figure-8.png", name:"Black Grapes", stock:"17 Items", bg:"bg-[#FEEFEA]"},
        {image:"/Images/Figure-9.png", name:"Custard Apple", stock:"9 Items", bg:"bg-[#ECFFEA]"},
        {image:"/Images/Figure-10.png", name:"Coffee & Tea", stock:"19 Items", bg:"bg-[#F2FCE4]"},
        {image:"/Images/Figure-10.png", name:"Coffee & Tea", stock:"19 Items", bg:"bg-[#F2FCE4]"}
    ]
  return (
    <div>

      <div className='w-11/12 mx-auto py-8 md:py-20'>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-start mb-10">Featured Categories</h2>
        <div className='flex justify-center items-center gap-4'>
          <FaArrowLeft className='text-xl text-black/60 hover:scale-130 transition-transform duration-200' />
          {figure.map((item, i)=>(
                <div key={i} className={item.bg+" w-38 rounded-xl hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer "}>
                    <div className='px-3 py-6 flex flex-col items-center'>
                        <img src={item.image} alt={item.name} className='w-24 mb-4'/>
                        <h3 className='font-semibold line-clamp-1 overflow-hidden text-black/70 mb-2'>{item.name}</h3>
                        <p className='text-sm text-gray-500'>{item.stock}</p>
                    </div>
                </div>
            ))}
          <FaArrowRight className='text-xl text-black/60 hover:scale-130 transition-transform duration-200' />
        </div>
      </div>
      
    </div>
  )
}
