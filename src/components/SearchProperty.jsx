import React from 'react'
import { Form,Formik,Field,ErrorMessage } from "formik";
import Button from "../components/Button";


const SearchProperty = () => {
  return (
    <div className='flex w-auto h-auto border px-3 py-6 rounded-full'>
        <Formik
        initialValues={{
            address:"",
            option:"",
            price:""
        }}
        onSubmit={onsubmit}
        >
            <Form className='flex'>
            <Field 
            className='flex w-auto h-auto px-3 border-r-2'
            type='text'
            name='address'
            placeholder='location'/>

            <Field
            className='flex w-auto h-auto px-3 border-r-2'
            type='text'
            name='option'
            placeholder='options'/>

            <Field 
            className='flex w-auto h-auto px-3 border-r-2'
            type='text'
            name='price'
            placeholder='price'/>

            <Button/>

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