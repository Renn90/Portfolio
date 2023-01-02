import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from '../Components/NavBar';

const Main = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Main
