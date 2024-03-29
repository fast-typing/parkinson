import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import MainPage from './pages/MainPage.tsx';
import Samples from './pages/Samples.tsx';
import Upload from './pages/Upload.tsx';
import MoreInfo from './pages/MoreInfo.tsx';
import HealthCare from './pages/HealthCare.tsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='flex justify-center my-24 '>
        <div className='w-[var(--page-width)] px-8'>
          <Routes>
            <Route path="" element={<MainPage />} />
            <Route path="more-info" element={<MoreInfo />} />
            <Route path="upload" element={<Upload />} />
            <Route path="samples" element={<Samples />} />
            <Route path="healthcare" element={<HealthCare />} />
            <Route path="ai" element={<input />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
