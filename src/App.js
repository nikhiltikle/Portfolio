import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import { NotFound, Loader, ScrollToTop, Navbar, Footer } from './components';

import Contact from './pages/Contact';
import About from './pages/About';
import ServicePage from './pages/ServicePage';
import Resume from './pages/Resume';

const Home = React.lazy(() => import('./pages/Home'));
const Project = React.lazy(() => import('./pages/Project'));

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes('404');

  return (
    <>
      <ScrollToTop />
      {isFalse || <Navbar />}
      <Suspense fallback={<Loader />}>
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />}></Route>
          </Routes>
        </div>
      </Suspense>
      {isFalse || <Footer />}
    </>
  );
}

export default App;
