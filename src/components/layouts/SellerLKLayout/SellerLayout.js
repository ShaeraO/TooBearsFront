import React from 'react'
import SellerCard from './SellerCard'
import { Outlet, Routes, Route } from 'react-router-dom';
import Homepage from '../../SellerLK/Homepage';
import Orders from '../../SellerLK/Orders';
import AddWork from '../../SellerLK/AddWork';
import CheckWork from '../../SellerLK/CheckWork';
import Messenger from '../../SellerLK/Messenger';
import Favorite from '../../SellerLK/Favorite';
import SettingsLayout from './SettingsLayout';
import Settings from '../../SellerLK/Settings';
import Addition from '../../SellerLK/Addition';

const SellerLayout = () => {
  return (
    <>
    <SellerCard />
    <main className="container">
      <Outlet />
    </main>
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="Orders" element={<Orders />} />
      <Route path="AddWork" element={<AddWork />} />
      <Route path="CheckWork" element={<CheckWork />} />
      <Route path="Messenger" element={<Messenger />} />
      <Route path="Favorite" element={<Favorite />} />
      <Route path="SettingsMenu" element={<SettingsLayout />}>
        <Route path="Settings" element={<Settings />} />
        <Route path="Addition" element={<Addition />} />
      </Route>
    </Routes>
    </>
  )
}

export default SellerLayout