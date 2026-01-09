import React from 'react';

const Card = () => {
    const images = [
        { id: 1, img: "/Images/alt.png", title: "Everyday Fresh & Clean with Our Products" },
        { id: 2, img: "/Images/alt_2.png", title: "Make your Breakfast Healthy and Easy" },
        { id: 3, img: "/Images/alt_3.png", title: "The best Organic Products Online" },
    ];

    return (
        <div className="w-11/12 mx-auto flex flex-wrap gap-6 items-center justify-center pb-10">
            {images.map(card => (
                <div key={card.id} className="relative w-full md:w-[48%] lg:w-[32%] overflow-hidden rounded-lg">
                    <img src={card.img} alt={card.title} className="w-full h-auto " />
                    <div className="absolute inset-0 w-[60%] flex flex-col items-start justify-center gap-6 ml-8">
                        <h2 className="text-black text-xl md:text-2xl font-semibold">{card.title}</h2>
                        <button className=" bg-[#3bb77e] text-white px-2 py-1 text-sm rounded cursor-pointer hover:scale-110 hover:bg-[#05c77c] transition-transform duration-200">Shop Now</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;


