import React from 'react'
import { Route,Routes } from "react-router-dom";
import UserLayout from "../Layout/UserLayout";
import Home from "../pages/Home"
import ProductDetails from "../pages/ProductDetails";

const User = () => {
  return (
    <Routes>
        <Route element={<UserLayout/>}>

        <Route path="/" element={<Home/>}/>
        <Route path="/ProductDetails" element={<ProductDetails/>}/>
        
        </Route>
    </Routes>
  )
}

export default User