import React from 'react'
import { Route,Routes } from "react-router-dom";
import UserLayout from "../Layout/UserLayout";
import Home from "../pages/Home"
import ProductDetails from "../pages/ProductDetails";
import UserLogin from "../pages/UserLogin";
import UserSignup from '../pages/UserSignup';

const User = () => {
  return (
    <Routes>
        <Route path='/Login' element={<UserLogin/>}/>
        <Route path='/Signup' element={<UserSignup/>}/>
        
        <Route element={<UserLayout/>}>

        <Route path="/" element={<Home/>}/>
        <Route path="/ProductDetails" element={<ProductDetails/>}/>
        
        </Route>
    </Routes>
  )
}

export default User