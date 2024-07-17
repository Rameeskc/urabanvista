import React from 'react'
import { FaSearch } from "react-icons/fa";

const button = (props) => {
  const {style,value}=props
  return (
    <div className={`${style} px-4 py-2 bg-blue-500 text-white rounded-full flex items-center justify-center w-auto cursor-pointer`}>
      {value}
    </div>
  )
}

export default button