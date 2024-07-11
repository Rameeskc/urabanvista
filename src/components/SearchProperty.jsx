import React from 'react'
import { Form,Formik,Field,ErrorMessage } from "formik";
import { IoLocation } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { LuIndianRupee } from "react-icons/lu";
import Button from "../components/Button";


const SearchProperty = () => {
  return (
    <div className='flex justify-center items-center w-auto h-auto border px-3 py-5 md:py-3 mb-5 rounded-lg md:rounded-full'>
        <Formik
        initialValues={{
            address:"",
            option:"",
            price:""
        }}
        onSubmit={onsubmit}
        >
            <Form className='flex flex-col md:flex-row'>
            <div className="relative flex w-auto h-auto py-3">
            <IoLocation className="absolute left-2 top-[23px] md:left-1 text-gray-500" />
            <Field
              name="address"
              type="text"
              placeholder="location"
              className="pl-10 pr-4 py-2 border-b-2 md:px-6 md:border-b-0 md:border-r-2 focus:outline-none"
            />
          </div>

          <div className="relative flex w-auto h-auto py-3">
          <IoMdHome className="absolute left-2 top-[23px] md:left-1 md:top-[25px] text-gray-500" />
            <Field
              name="option"
              type="text"
              placeholder="option"
              className="pl-10 pr-4 py-2 border-b-2 md:px-6 md:border-b-0 md:border-r-2 focus:outline-none"
            />
          </div>

          <div className="relative flex w-auto h-auto py-3">
          <LuIndianRupee className="absolute left-2 top-[23px] md:left-1 md:top-[25px] text-gray-500" />
            <Field
              name="price"
              type="text"
              placeholder="price"
              className="pl-10 pr-4 py-2 border-b-2 md:px-6 md:border-b-0 md:border-r-2 focus:outline-none"
            />
          </div>


            <Button style={'mt-6 md:mt-0 md:ml-4 md:px-8'} />
            </Form>

        </Formik>
        {/* <p className='flex w-auto h-auto px-3 border-r-2'>kjbsvdhbudsvc</p>
        <p className='flex w-auto h-auto px-3 border-r-2'>kjbsvdhbudsvc</p>
        <p className='flex w-auto h-auto px-3 border-r-2'>kjbsvdhbudsvc</p>
        <p className='flex w-auto h-auto px-3'>kjbsvdhbudsvc</p> */}
    </div>
  )
}

export default SearchProperty
// className='flex w-auto h-auto px-3'