import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import MainPage from './pages/MainPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='flex justify-center my-24 '>
        <div className='w-[var(--page-width)] px-8'>
          <Routes>
            <Route path="" element={<MainPage />} />
            <Route path="upload" element={<input />} />
            <Route path="samples" element={<input />} />
            <Route path="ai" element={<input />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
