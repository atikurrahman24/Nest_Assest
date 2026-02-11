import React from 'react'
import { IoMdPin } from "react-icons/io";
import { FaHeadphones } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";


const Footer = () => {
  return (
    <div className='w-11/12 mx-auto py-12 px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
            <div className='m-4 text-sm'>
                <img src="/Images/logo (2).png" alt="" />
                <p className='mt-2'>Awesome grocery store website template</p>
                <div className='flex items-start gap-1.5 mt-2'>
                    <IoMdPin className='text-[#3BB77E]'/>
                    <p>Address:</p>
                    <p>5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                </div>
                <div className='flex items-center gap-1.5 mt-2'>
                    <FaHeadphones className='text-[#3BB77E]'/>
                    <p>Call Us:</p>
                    <p>(+91) 123 456 789</p>
                </div>
                <div className='flex items-center gap-1.5 mt-2'>
                    <IoMail className='text-[#3BB77E]'/>
                    <p>Email:</p>
                    <p>contact@e-commerce.com</p>
                </div>
                <div className='flex items-center gap-1.5 mt-2'>
                    <MdOutlineWatchLater className='text-[#3BB77E]'/>
                    <p>Opening Hours:</p>
                    <p>Mon - Sun: 10:00 - 22:00</p>
                </div>
            </div>
            <div className='p-4'>
                <h2 className='text-xl font-bold'>Company</h2>
                <li className='mt-2 text-sm'>About Us</li>
                <li className='mt-2 text-sm'>Delivery Information</li>
                <li className='mt-2 text-sm'>Privacy Policy</li>
                <li className='mt-2 text-sm'>Terms & Conditions</li>
                <li className='mt-2 text-sm'>Return Policy</li>
                <li className='mt-2 text-sm'>FAQs</li>
                <li className='mt-2 text-sm'>Contact Us</li>
            </div>
            <div className='p-4'>
                <h2 className='text-xl font-bold'>Account</h2>
                <li className='mt-2 text-sm'>Sign in</li>
                <li className='mt-2 text-sm'>View Cart</li>
                <li className='mt-2 text-sm'>My Wishlist</li>
                <li className='mt-2 text-sm'>Track My Order</li>
                <li className='mt-2 text-sm'>Help Ticket</li>
                <li className='mt-2 text-sm'>Shipping Details</li>
                <li className='mt-2 text-sm'>Compare products</li>
            </div>
            <div className='p-4'>
                <h2 className='text-xl font-bold'>Corporate</h2>
                <li className='mt-2 text-sm'>Become a Vendor</li>
                <li className='mt-2 text-sm'>Affiliate Program</li>
                <li className='mt-2 text-sm'>Farm Business</li>
                <li className='mt-2 text-sm'>Our Supports</li>
                <li className='mt-2 text-sm'>Accessibility</li>
                <li className='mt-2 text-sm'>Promotions</li>
                <li className='mt-2 text-sm'>Farm Careers</li>
            </div>
            <div className='p-'>
                <img src="/Images/Container.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer
