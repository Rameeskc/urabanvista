import React from "react";
import NavBar from "../components/NavBar";
import Bottom from "../components/Bottom";
import { Outlet } from "react-router-dom";


const UserLayout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Bottom/>
    </>
  )
}

export default UserLayout