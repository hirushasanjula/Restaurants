import React from 'react'
import logo from '../../assets/logo.png'
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='lg:fixed w-full shadow-md bg-white duration-200 z-50'>
        <div className='container'>
            <div className='flex justify-between py-2 p-6 items-center'>
                <div>
                    <a href='#' className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'> 
                        <img src={logo} alt='Foodie' className='w-10 '/> FoodZone
                    </a>
                </div>
                <div className='flex items-center gap-6'>
                    <ul className='hidden sm:flex gap-6'>
                        <li>
                            <a href='#' className='hover:bg-green-600 inline-block transition duration-300 hover:text-white p-1 rounded-md'>Home</a>
                        </li>
                        <li>
                            <a href='#' className='hover:bg-green-600 inline-block transition duration-300 hover:text-white p-1 rounded-md'>About</a>
                        </li>
                        <li>
                            <a href='#' className='hover:bg-green-600 inline-block transition duration-300 hover:text-white p-1 rounded-md'>Contact</a>
                        </li>
                    </ul>
                    <button className='bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3'>
                        Order
                        <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar