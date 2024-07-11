import React from 'react'
import { FaSearch } from "react-icons/fa";

const button = (props) => {
  const {style}=props
  return (
    <div className={`${style} px-4 py-3 bg-blue-500 text-white rounded-full flex items-center justify-center gap-1 cursor-pointer`}>
      
      <FaSearch/>Search
    </div>
  )
}

export default button