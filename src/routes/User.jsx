import React from 'react'
import { Route,Routes } from "react-router-dom";
import UserLayout from "../Layout/UserLayout";
import Home from "../pages/Home"

const User = () => {
  return (
    <Routes>
        <Route element={<UserLayout/>}>

        <Route path="/" element={<Home/>}/>
        
        </Route>
    </Routes>
  )
}

export default User