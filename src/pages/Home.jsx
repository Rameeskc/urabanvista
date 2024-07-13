import React from 'react'
import SearchProperty from "../components/SearchProperty";
import banner from "../assets/banner1.jpg"
import ProductCard from "../components/ProductCard";


const Home = () => {
  return (
    <>
    <div className='w-full h-[600px]'>
      <img src={banner} alt="banner " className='w-full h-full opacity-100' />
    </div>
    <div className='p-2 text-xl md:flex font-Montserrat justify-center pt-20 md:text-2xl pb-4'>
      <p>Welcome back! Let's continue your search</p>
    </div>

    <div className=' flex justify-center'>
      <SearchProperty/>
    </div>

    <div className='flex items-center px-5 mt-20 font-Montserrat text-xl mb-10'>
      <p>Latest</p>
    </div>

    <div className='px-2 mb-20 flex w-auto h-[250px] overflow-x-scroll scrollbar-none'>
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

export default Home