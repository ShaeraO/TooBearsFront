import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './Navbar'
import Footer from './Footer'


const MainLayout = () => {
  return (
    <>
    <NavBar />
    <main className='container'>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default MainLayout