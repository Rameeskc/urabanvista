import React from 'react'
import LoginImage from "../assets/login-image.jpg"
import { Form,Formik,ErrorMessage,Field } from "formik";
import Button from "../components/Button";

const UserLogin = () => {
  return (
    <div className=' relative h-screen w-screen flex justify-center items-center'>   
      <div className='absolute top-0 w-full h-full lg:hidden' style={{ backgroundImage: `url(${LoginImage})` }} />
        <div className='absolute w-full md:w-2/3 h-[550px] flex border-2 bg-white lg:bg-gradient-to-l from-gray-200 ...'>
            <div className='hidden lg:flex w-[50%] h-full'>
              <img src={LoginImage} alt="" className='w-full h-full rounded-tr-3xl rounded-br-3xl'/>
            </div>


            <div className=' w-full lg:w-[50%] h-full'>
              <div className='h-[120px] w-full flex items-center justify-center mt-16'>
                <p className='text-3xl font-bold font-uniquifier'>Login</p>
              </div>
            <Formik
             initialValues={{
              email:"",
              password:""
             }}
             onSubmit={onsubmit}
             >
              <Form>

             
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
                    name="password"
                    type="password"
                    placeholder="password"
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
              <p className='font-Montserrat'>create new account <span className='text-blue-700 cursor-pointer'>SignUp</span></p>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default UserLogin