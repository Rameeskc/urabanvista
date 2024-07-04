import React,{useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import SellButton from "../components/JoinButton";

const NavBar = () => {

  const [nav, setNav] = useState(false);


  const items =[
    {
      id:1,
      item:"Buy"
    },
    {
      id:2,
      item:"Rent"
    },
    {
      id:3,
      item:"Sell"
    },
    {
      id:4,
      item:"Help"
    },

  ]

 

  return (
    <div className='h-[80px] w-full bg-blue-800 flex items-center justify-between px-3 pr-5'>
      <div className='px-2 w-[150px] lg:w-[300px] lg:px-6 text-white'>
        <p className='text-3xl font-Vollkorn font-bold'>URBANVISTA</p>
      </div>
      
      <ul className='hidden xl:flex  px-4 text-white'>

        {
          items.map(({item,id})=>(
            <li key={id} className=' px-4 flex items-center gap-1'>{item} <IoIosArrowDown /> </li>
          )
          )
        }
      </ul>
      <nav className='relative'>
      <div
          onClick={()=> setNav(!nav)} 
          className=' text-white xl:hidden'>
          {nav? <FaTimes  size={30}/> :<FaBars size={30}/>}  
        
      </div>

      { nav && (
        <ul className='flex flex-col justify-evenly items-center absolute top-[55px] right-[-21px] h-[300px] w-[250px] duration-300 bg-blue-800 text-white text-xl xl:hidden'>
          {
          items.map(({item,id})=>(
            <li key={id} className='h-[75px] w-full px-4 flex items-center justify-center gap-1 border '>{item} <IoIosArrowDown /> </li>
          ))}


          <li><SellButton ab={'w-[220px] h-[50px] rounded-full bg-white relative'}/></li>


        </ul>
      )}

    </nav>

      <SellButton buttonStyle={"hidden xl:flex"}/>
                  


    </div>

  )
}

export default NavBar;