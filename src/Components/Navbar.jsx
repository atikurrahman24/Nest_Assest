import React, { useState } from "react";
import { BsFire } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" border-b border-black/10 bg-white shadow-sm sticky top-0 z-50">

      <div className="w-11/12 mx-auto py-2 md:py-3  flex items-center justify-between ">

        {/* Left side */}
        <div className="flex items-center gap-12 md:gap-4 lg:gap-16">

          <div className="flex items-center gap-0 md:gap-1 lg:gap-2 cursor-pointer">
            <img src="/Images/logo.png" alt="Logo" className="w-10 md:w-14 lg:w-16" />
            <div className="flex flex-col gap-0">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#3BB77E]">Nest</h2>
              <p className="text-[6px] md:text-[7px] lg:text-[8px] text-black/70 -mt-1">MART & GROCERY</p>
            </div>
          </div>
          <p className="flex items-center gap-1 text-[14px] md:text-[16px] lg:text-[20px] cursor-pointer hover:text-green-600 hover:scale-110 transition-transform duration-300"><BsFire className="text-[#3BB77E]" /><span>Hot Deals</span></p>
          
        </div>

        {/* Mid section */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6 px-2 ">

          {/* Mid menu for md+ screens */}
          <div className="hidden md:flex overflow-hidden gap-4 md:gap-4 lg:gap-10 p-2 ">
            <p className="text-[14px] md:text-[16px] lg:text-[20px]  cursor-pointer hover:text-green-600 hover:scale-110 transition-transform duration-300">About</p>
            <p className="text-[14px] md:text-[16px] lg:text-[20px]  cursor-pointer hover:text-green-600 hover:scale-110 transition-transform duration-300">Shop</p>
            <p className="text-[14px] md:text-[16px] lg:text-[20px]  cursor-pointer hover:text-green-600 hover:scale-110 transition-transform duration-300">Mega Menu</p>
            <p className="text-[14px] md:text-[16px] lg:text-[20px]  cursor-pointer hover:text-green-600 hover:scale-110 transition-transform duration-300">Vendors</p>
            <p className="text-[14px] md:text-[16px] lg:text-[20px]  cursor-pointer hover:text-green-600 hover:scale-110 transition-transform duration-300">Blogs</p>
            <p className="text-[14px] md:text-[16px] lg:text-[20px]  cursor-pointer hover:text-green-600 hover:scale-110 transition-transform duration-300">Pages</p>
            <p className="text-[14px] md:text-[16px] lg:text-[20px]  cursor-pointer hover:text-green-600 hover:scale-110 transition-transform duration-300">Contact</p>
          </div>

          {/* Small screen dropdown */}
          <div className="relative md:hidden pt-2">
            <button onClick={() => setIsOpen(!isOpen)} className=" -mr-6">{isOpen ? <HiX size={16} /> : <HiMenu size={24} />}</button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white/50 shadow-md rounded-md z-10 flex flex-col">
                <p className="px-4 py-2 text-sm cursor-pointer hover:bg-green-300">About</p>
                <p className="px-4 py-2 text-sm cursor-pointer hover:bg-green-300">Shop</p>
                <p className="px-4 py-2 text-sm cursor-pointer hover:bg-green-300">Mega Menu</p>
                <p className="px-4 py-2 text-sm cursor-pointer hover:bg-green-300">Vendors</p>
                <p className="px-4 py-2 text-sm cursor-pointer hover:bg-green-300">Blogs</p>
                <p className="px-4 py-2 text-sm cursor-pointer hover:bg-green-300">Pages</p>
                <p className="px-4 py-2 text-sm cursor-pointer hover:bg-green-300">Contact</p>
              </div>
            )}
          </div>

        </div>

        {/* Right side login button */}
        <button className="bg-[#3BB77E] text-sm md:text-lg lg:text-xl text-white hover:bg-amber-600 duration-200 px-2 md:px-3 lg:px-4 py-1 lg:py-1.5 rounded-lg">Log In</button>

      </div>

    </div>
  );
}
