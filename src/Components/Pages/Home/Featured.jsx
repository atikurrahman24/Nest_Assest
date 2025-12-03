import React from 'react'

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
        {image:"/Images/Figure-10.png", name:"Coffee & Tea", stock:"19 Items", bg:"bg-[#F2FCE4]"}
    ]
  return (
    <div>

      <div className='w-11/12 mx-auto py-20'>
        <h2 className="text-3xl font-semibold text-start mb-10">Featured Categories</h2>
        <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4'>
            {figure.map((item, i)=>(
                <div key={item.i} className={item.bg+" rounded-xl"}>
                    <div className='px-3 py-6  flex flex-col items-center'>
                        <img src={item.image} alt={item.name} className='w-24 mb-4'/>
                        <h3 className='font-semibold text-black/70 mb-2'>{item.name}</h3>
                        <p className='text-sm text-gray-500'>{item.stock}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

    </div>
  )
}
