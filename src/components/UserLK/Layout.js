import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import OrderMenu from './OrderMenu'
import ProfileMenu from './ProfileMenu'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <NavBar />
    <ProfileMenu />
    <OrderMenu />
    
    <main className="container">
      <Outlet />
    </main>


    <Footer />
    </>
  )
}

export default Layout