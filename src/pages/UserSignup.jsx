import React from 'react'
import SignupImage from "../assets/signup-image.jpg"
import { Form,Formik,ErrorMessage,Field } from "formik";
import Button from "../components/Button";
 
const UserSignup = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className='w-full md:w-2/3 h-[550px] flex border-2'>
            <div className='hidden md:flex w-[50%] h-full'>
              <img src={SignupImage} alt="" className='w-full h-full rounded-tr-3xl rounded-br-3xl'/>
            </div>


            <div 
              className=' w-full md:w-[50%] h-full'
            >
              <div className='h-[120px] w-full flex items-center justify-center mt-8'>
                <p className='text-3xl font-bold font-uniquifier'>Sign Up</p>
              </div>
            <Formik
             initialValues={{
              username:"",
              email:"",
              phone:"",
              password:"",
              confirmpassword:""
             }}
             onSubmit={onsubmit}
             >
              <Form>

                <div className='h-[50px] w-ful flex items-center justify-center'>
                  <Field
                    name="username"
                    type="text"
                    placeholder="User Name"
                    className='h-7 px-3 border-2 rounded-full focus:outline-none'
                  />
                </div>
                <div className='h-[50px] w-full flex items-center justify-center'>
                  <Field
                    name="email"
                    type="email"
                    placeholder="email"
                    className='h-7 px-3 border-2 rounded-full focus:outline-none'
                  />
                </div>
                <div className='h-[50px] w-full flex items-center justify-center'>
                  <Field
                    name="phone"
                    type="number"
                    placeholder="phone number"
                    className='h-7 px-3 border-2 rounded-full focus:outline-none'
                  />
                </div>
                <div className='h-[50px] w-full flex items-center justify-center'>
                <Field
                    name="password"
                    type="password"
                    placeholder="password"
                    className='h-7 px-3 border-2 rounded-full focus:outline-none'
                  />
                </div>
                <div className='h-[50px] w-full flex items-center justify-center'>
                <Field
                    name="confirmpassword"
                    type="password"
                    placeholder="confirm password"
                    className='h-7 px-3 border-2 rounded-full focus:outline-none'
                  />
                </div>
                <div className='h-[50px] w-full flex items-center justify-center'>
                  <Button
                  value="submit"
                  style="mt-5 px-5 py-1"
                  />
                </div>


              </Form>
            </Formik>
            <div className='h-[50px] w-full flex items-end justify-center'>
              <p className='font-Montserrat'>you have already account <span className='text-blue-700 cursor-pointer'>Login</span></p>
            </div>
            
            </div>
        </div>
    </div>
  )
}           


export default UserSignup