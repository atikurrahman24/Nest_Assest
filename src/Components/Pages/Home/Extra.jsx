import React from 'react'

import log1 from "../../../assets/icon-1.png";
import log2 from "../../../assets/icon-2.png";
import log3 from "../../../assets/icon-3.png";
import log4 from "../../../assets/icon-4.png";
import log5 from "../../../assets/icon-5.png";

const Extra = () => {
    const deals = [
    { id: 1, title: "Best prices & offers", desc: "Orders $50 or more", image: log1 },
    { id: 2, title: "Free delivery", desc: "24/7 amazing services", image: log2 },
    { id: 3, title: "Great daily deal", desc: "When you sign up", image: log3 },
    { id: 4, title: "Wide assortment", desc: "Mega Discounts", image: log4 },
    { id: 5, title: "Easy returns", desc: "Within 30 days", image: log5 },
  ];
  return (
    <div className=' mx-auto py-8'>
        <div className='flex flex-wrap items-center justify-evenly'>
            {deals.map((item) =>(
                <div key={item.id} className='bg-gray-100 rounded-lg flex items-center gap-4 p-3 w-full md:w-auto'>
                    <img src={item.image} alt={item.title} className='w-12 h-12' />
                    <div>
                        <h3 className='text-lg font-semibold'>{item.title}</h3>
                        <p className='text-sm text-gray-400'>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Extra
