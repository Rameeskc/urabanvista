import React from 'react'

const SellButton = (props) => {
    const {buttonStyle,ab} = props
  return (
    <div className={` ${buttonStyle}`}>
        <button className={`${ab}w-[220px] h-[50px] rounded-full bg-white relative`}>
            <p className='text-blue-800 absolute top-[13px] left-[21px] text-md'>Post Property</p>
            <div className='w-[80px] h-[35px] bg-blue-800 absolute left-[129px] top-[8px] rounded-full flex justify-center items-center font-bold text-lg text-white font-Vollkorn'> Free</div>
        </button>
    </div>
  ) 
}

export default SellButton