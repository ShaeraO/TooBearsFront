import React from 'react'
import { Outlet } from 'react-router-dom';
import SettingsMenu from '../components/Settings/SettingsMenu';

const SettingsLayout = () => {
  return (
    <>
    <SettingsMenu />
    <main className="container">
    <Outlet />
    </main>
    </>
  )
}

export default SettingsLayout