import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import SellerCard from './SellerCard'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <NavBar />
    <SellerCard />
    <main className="container">
      <Outlet />
    </main>


    <Footer />
    </>
  )
}

export default Layout