import {Routes, Route} from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout/MainLayout';
import { Register } from './components/layouts/RegisterLayout/RegisterLayout';
import SellerLayout from './components/layouts/SellerLKLayout/SellerLayout';
import Homepage from './components/SellerLK/Homepage'
import MainPage from './pages/MainPage';
import GlobalStyles from './styles/GlobalStyles';

function App() {
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
