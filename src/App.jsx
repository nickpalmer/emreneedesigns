import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ColorPicker from './components/ColorPicker';
import TranslationEditor from './components/TranslationEditor';
import Home from './pages/Home';
import About from './pages/About';
import Designs from './pages/Designs';
import Custom from './pages/Custom';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen" style={{ background: 'linear-gradient(to bottom, var(--gradient-top), var(--gradient-bottom))' }}>
        <Header />
        <main className="flex-grow" style={{ background: 'transparent' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/contact" element={<Contact />} />
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