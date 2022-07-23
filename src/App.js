import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Routes, Route} from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout/MainLayout';
import { Register } from './components/layouts/RegisterLayout/RegisterLayout';
import SellerLayout from './components/layouts/SellerLKLayout/SellerLayout';
import Homepage from './components/SellerLK/Homepage'
import MainPage from './pages/MainPage';
import { selectIsAuth, fetchAuthMe } from './redux/slices/auth';
import GlobalStyles from './styles/GlobalStyles';

function App() {

  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)

  React.useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])

  return (
    <>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="auth/*" element={<Register />} />
        <Route path="account/*" element={<SellerLayout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
