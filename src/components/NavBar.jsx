import React,{useState} from 'react'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import SellButton from "../components/JoinButton";

const NavBar = () => {

  const [nav, setNav] = useState(false);


  // const items =[
  //   {
  //     id:1,
  //     item:"Buy"
  //   },
  //   {
  //     id:2,
  //     item:"Rent"
  //   },
  //   {
  //     id:3,
  //     item:"Help"
  //   },
    

  // ]

 

  return (
    <div className='h-[80px] w-full bg-blue-800 flex items-center justify-between px-3 pr-5'>
      <div className='px-2 w-[150px] lg:w-[300px] lg:px-6 text-white'>
        <p className='text-3xl font-Vollkorn font-bold'>URBANVISTA</p>
      </div>
      
      <ul className='hidden lg:flex  px-4 text-white font-Montserrat'>


            <li className=' px-8 flex items-center gap-1 hover:text-lg hover:font-bold duration-500 cursor-pointer'>Buy</li>
            <li className=' px-8 flex items-center gap-1 hover:text-lg hover:font-bold duration-500 cursor-pointer'>Rent</li>
            <li className=' px-8 flex items-center gap-1 hover:text-lg hover:font-bold duration-500 cursor-pointer'>About Us</li>
            <li className=' px-8 flex items-center gap-1 hover:text-lg hover:font-bold duration-500 cursor-pointer'>Login</li>
          
      </ul>
      <nav className='absolute right-6 lg:hidden'>
      <div
          onClick={()=> setNav(!nav)} 
          className=' text-white '>
          {nav? <FaTimes  size={30}/> :<FaBars size={30}/>}  
        
      </div>

      { nav && (
        <ul className='flex flex-col justify-evenly items-center absolute top-[56px] right-[-25px] h-auto w-[250px] duration-300 bg-blue-800 text-white text-xl z-10 '>
          <li className='h-[75px] w-full px-4 flex items-center justify-center gap-1 border '>Buy</li>
          <li className='h-[75px] w-full px-4 flex items-center justify-center gap-1 border '>Rent</li>
          <li className='h-[75px] w-full px-4 flex items-center justify-center gap-1 border '>About Us</li>
          <li className='h-[75px] w-full px-4 flex items-center justify-center gap-1 border '>Login</li>

          <li className='h-[75px] w-full px-4 flex items-center justify-center'>
            <SellButton 
             ab={'w-[230px] h-[45px] rounded-full bg-white relative '}
             cd={'text-blue-800 absolute top-[9px] left-[11px] text-md'}
             ef={'left-[141px] top-[5px] '}
            />
          </li>


        </ul>
      )}

    </nav>
    
    <SellButton buttonStyle={'hidden lg:flex'}/>
 

    </div>

  )
}

export default NavBar;