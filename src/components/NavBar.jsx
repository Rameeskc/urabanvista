import React,{useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";

const NavBar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='h-[80px] w-full bg-blue-800 flex items-center justify-between px-3'>
      <div className='px-2 w-[150px] lg:w-[300px] lg:px-6 text-white'>
        <p className='text-xl lg:text-3xl font-Vollkorn font-bold'>URBANVISTA</p>
      </div>
      
      <ul className='hidden md:flex  px-4 text-white'>
        <li className=' px-6 flex items-center gap-2'>Buy <IoIosArrowDown /> </li>
        <li className='px-6 flex items-center gap-2'>Rent <IoIosArrowDown /> </li>
        <li className='px-6 flex items-center gap-2'>Sell <IoIosArrowDown /> </li>
        <li className='px-6 flex items-center gap-2'>Help <IoIosArrowDown /> </li>
      </ul>

      <div>
        <FaBars/>
      </div>
   
      
     
      {/* <div >
      <ul className=' flex  px-4 text-white'>
        <li className=' px-6 flex items-center gap-2'>Buy <IoIosArrowDown /> </li>
        <li className='px-6 flex items-center gap-2'>Rent <IoIosArrowDown /> </li>
        <li className='px-6 flex items-center gap-2'>Sell <IoIosArrowDown /> </li>
        <li className='px-6 flex items-center gap-2'>Help <IoIosArrowDown /> </li>
      </ul>

      </div> */}
    </div>

  )
}

export default NavBar;