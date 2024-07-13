import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import banner from "../assets/banner1.jpg"


const ProductDetails = () => {
  return (
    <div className='flex flex-col justify-center items-center'>

      <div className='w-[1100px] h-auto border-2 rounded-lg mt-10 font-Montserrat mb-6'>
        <p className='p-2 text-xl font-semibold mt-5'>3bhk</p>
        <p className='p-2 text-lg font-medium flex items-center gap-1'><MdCurrencyRupee />3000</p>
        <p className='p-2 text-md font-medium flex mb-5'>address</p>
        <div className='w-[1100px] h-[400px] flex'>

          <div className='w-[400px] h-full border-t border-r flex items-center justify-center'>
            <div className='w-[300px] h-[300px]'>
              <img src={banner} alt=""  className=' w-full h-[200px] p-1'/>
              <div className=' w-full h-[100px] flex'>
                <img src={banner} alt="" className=' w-[100px] h-[100px] p-1'/> 
                <img src={banner}alt="" className=' w-[100px] h-[100px] p-1'/>
                <img src={banner} alt="" className=' w-[100px] h-[100px] p-1'/>
              </div>
            </div>
          </div>

          <div className=' w-[700px] h-full border-t'></div>
        </div>
      </div>

      <div className='w-[1100px] h-auto border-2 rounded-lg mt-10 font-Montserrat mb-6'>
        <p className='p-4 text-2xl font-semibold mt-5'>More Details</p>

        <div className='w-full flex pl-4 mt-8'>
          <p className='w-[200px]'>Price Breakup</p>
          <p className='font-semibold flex items-center'><MdCurrencyRupee />3 Cr | <MdCurrencyRupee />7,000</p>
        </div>
        <div className='w-full flex pl-4 mt-8'>
          <p className='w-[200px]'>Booking Amount</p>
          <p className='font-semibold flex items-center'><MdCurrencyRupee /> 1</p>
        </div>
        <div className='w-full flex pl-4 mt-8'>
          <p className='w-[200px]'>Address</p>
          <p className='font-semibold'>abcd</p>
        </div>
        <div className='w-full flex pl-4 mt-8'>
          <p className='w-[200px]'>Landmarks</p>
          <p className='font-semibold'>ramees</p>
        </div>
        <div className='w-full flex pl-4 mt-8'>
          <p className='w-[200px]'>Furnishing</p>
          <p className='font-semibold'>ramees</p>
        </div>
        <div className='w-full flex pl-4 mt-8'>
          <p className='w-[200px]'>Flooring</p>
          <p className='font-semibold'>ramees</p>
        </div>
        <div className='w-full flex pl-4 mt-8'>
          <p className='w-[200px]'>Type of Ownership</p>
          <p className='font-semibold'>ramees</p>
        </div>
        <div className='w-full flex pl-4 mt-8'>
          <p className='w-[200px]'>Overlooking</p>
          <p className='font-semibold'>Main Road</p>
        </div>
        <div className='w-full flex pl-4 mt-8'>
          <p className='w-[200px]'>Age of Construction</p>
          <p className='font-semibold'>5 to 10 years</p>
        </div>
        <div className='w-full flex pl-4 mt-8'>
          <p className='w-[200px]'>Additional Rooms</p>
          <p className='font-semibold'>Puja Room</p>
        </div>
        <div className='w-full flex pl-4 mt-8'>
          <p className='w-[200px]'>Water Availability</p>
          <p className='font-semibold'>24 Hours Available</p>
        </div>
        <div className='w-full flex pl-4 mt-8 mb-8'>
          <p className='w-[200px]'>Status of Electricity</p>
          <p className='font-semibold'>No/Rare Powercut</p>
        </div>
        <div className='w-full flex pl-4 mt-8 mb-8'>
          <p className='w-[200px]'>Lift</p>
          <p className='font-semibold'>3</p>
        </div>
        <div className='w-full flex pl-4 mt-8 mb-8'>
          <p className='w-[200px]'>Authority Approval</p>
          <p className='font-semibold'>City Municipal Corporation</p>
        </div>

      </div>
    </div>
  )
}

export default ProductDetails