import React from 'react'
import SearchProperty from "../components/SearchProperty";
import banner from "../assets/banner1.jpg"

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
    </>

  )
}

export default Home