import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ColorPicker from './components/ColorPicker';
import TranslationEditor from './components/TranslationEditor';
import Home from './pages/Home';
import About from './pages/About';
import Designs from './pages/Designs';
import Custom from './pages/Custom';
import Contact from './pages/Contact';
import Journals from './pages/Journals';
import Brochure from './pages/Brochure';
import BusinessCards from './pages/BusinessCards';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen" style={{ background: 'linear-gradient(to bottom, var(--gradient-top), var(--gradient-bottom))' }}>
        <Header />
        <main className="flex-grow" style={{ background: 'transparent' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/journals" element={<Journals />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/business-cards" element={<BusinessCards />} />

            {/* Redirects from old site routes */}
            <Route path="/store" element={<Navigate to="/designs" replace />} />
            <Route path="/store/*" element={<Navigate to="/designs" replace />} />
          </Routes>
        </main>
        <Footer />
        <ColorPicker />
        <TranslationEditor />
      </div>
    </Router>
  );
};

export default App;