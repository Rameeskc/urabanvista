import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import banner from "../assets/banner1.jpg"
import { FaBath } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { FaToiletPortable } from "react-icons/fa6"
import ProductCard from "../components/ProductCard";


const ProductDetails = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center w-full'>

      <div className='w-[1100px] h-auto border-2 rounded-lg mt-10 font-Montserrat mb-6'>
        <p className='py-2 px-5 text-xl font-semibold mt-5'>3bhk House</p>
        <p className='py-2 px-5 text-lg font-medium flex items-center gap-1'><MdCurrencyRupee />30 Lacks</p>
        <p className='py-2 px-5 text-md font-medium flex mb-5'>koduvally,kooduvally,calicut</p>
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

          <div className=' w-[700px] h-full border-t'>
            <div className='w-[600px] h-[80px] bg-slate-200 mx-8 rounded-xl mt-4'>
              <ul className='h-full w-full flex justify-between items-center px-4'>
                <li className='flex items-center justify-center gap-1 border-r-2 px-4 border-gray-500 text-gray-600'><IoBed />3 Beds</li>
                <li className='flex items-center justify-center gap-1 border-r-2 px-4 border-gray-500 text-gray-600'><FaBath />3 Baths</li>
                <li className='flex items-center justify-center gap-1 border-r-2 px-4 border-gray-500 text-gray-600'><FaCar />2 Car Parking</li>
                <li className='flex items-center justify-center gap-1 text-gray-600'><FaToiletPortable />Semi-Furnished</li>
              </ul>
            </div>
            <div className='w-[700px] h-full flex'>
              <div className=' w-[200px] h-[300px] '>
                  <div className='w-[200px] h-[100px] ml-5 pt-8'>
                    <p className='text-sm'>Carpet Area</p>
                    <p className='text-sm font-semibold'>2330 sqft</p>
                  </div>
                  <div className='w-[200px] h-[70px] ml-5 '>
                    <p className='text-sm'>Floor</p>
                    <p className='text-sm font-semibold'>2330 </p>
                  </div>
                  <div className='w-[200px] h-[100px] ml-5 '>
                    <p className='text-sm'>Facing</p>
                    <p className='text-sm font-semibold'>North</p>
                  </div>
                  
              </div>
              <div className=' w-[200px] h-[300px] '>
                  <div className='w-[200px] h-[100px] ml-5 pt-8'>
                    <p className='text-sm'>Transaction Type</p>
                    <p className='text-sm font-semibold'>Resale </p>
                  </div>
                  <div className='w-[200px] h-[70px] ml-5 '>
                    <p className='text-sm'>Status</p>
                    <p className='text-sm font-semibold'>Ready to Move</p>
                  </div>
                  <div className='w-[200px] h-[100px] ml-5 '>
                    <p className='text-sm'>Furnished Status</p>
                    <p className='text-sm font-semibold'>Furnished</p>
                  </div>
              </div>
              <div className=' w-[200px] h-[300px] '>
                  <div className='w-[200px] h-[100px] ml-5 pt-8'>
                    <p className='text-sm'>Landmarks</p>
                    <p className='text-sm font-semibold'>Coeporation Office. </p>
                  </div>
                  <div className='w-[200px] h-[70px] ml-5 '>
                    <p className='text-sm'>Water Availability</p>
                    <p className='text-sm font-semibold'>24 Hours Available</p>
                  </div>
                  <div className='w-[200px] h-[100px] ml-5 '>
                    <p className='text-sm'>Status of Electricity</p>
                    <p className='text-sm font-semibold'>No/Rare Powercut</p>
                  </div>
              </div>
            </div>
          </div>
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


    <p className='mt-6 text-2xl font-Montserrat px-6'>Popular Property</p>
    <div className='px-4 mb-20 flex w-auto h-[250px] overflow-x-scroll scrollbar-none mt-7'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
    </>
  )
}

export default ProductDetails