import React from 'react'
import banner from "../assets/banner1.jpg"
import { IoLocationSharp } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

const ProductCard = () => {
  return (
    <div className='w-[200px] h-[220px] rounded border p-2 relative mx-2'>
        <div className='w-full h-[130px]'>
            <img src={banner} alt="" className='w-[200px] h-[130px] rounded-t'/>
        </div>
        <div className='w-[200px] h-[90px]'>
            <p className='text-lg font-semibold text-gray-600 font-Montserrat'>2bhk</p>
            <p className='text-sm font-semibold text-gray-600 font-Montserrat flex items-center gap-1'><IoLocationSharp />kerala</p>
            <p className='font-Montserrat flex items-center gap-1 text-sm font-semibold  text-gray-600 mt-1'> <MdCurrencyRupee /> 30000</p>
        </div>
        <button className='w-10 h-10 bg-blue-500 rounded-full absolute top-[171px] left-[148px] flex items-center justify-center text-white text-2xl '>
        <IoIosArrowRoundForward className='	animate-bounce' />
        </button>
    </div>
  ) 
}

export default ProductCard