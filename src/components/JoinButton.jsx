import React from 'react'

const SellButton = (props) => {
    const {buttonStyle,ab,cd,ef} = props
  return (
    <div >
        <button className={`${ab} ${buttonStyle} w-[220px] h-[50px] rounded-full bg-white relative`}>
            <p className={`${cd} text-blue-800 absolute md:top-[13px] md:left-[21px] text-md`}>Post Property</p>
            <div className={`${ef} w-[80px] h-[35px] bg-blue-800 absolute left-[129px] top-[8px] rounded-full flex justify-center items-center font-bold text-lg text-white font-Vollkorn`}> Free</div>
        </button>
    </div>
  ) 
}

export default SellButton