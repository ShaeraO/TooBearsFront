import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import ProfileMenu from './ProfileMenu'
import { Outlet } from 'react-router-dom';

const LayoutLeft = () => {
  return (
    <>
    <NavBar />
    <ProfileMenu />
    
    <main className="container">
      <Outlet />
    </main>


    <Footer />
    </>
  )
}

export default LayoutLeft