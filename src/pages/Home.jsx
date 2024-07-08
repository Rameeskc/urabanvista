import React from 'react'
import SearchProperty from "../components/SearchProperty";

const Home = () => {
  return (
    <>
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