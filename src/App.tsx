import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Dashboard from './pages/Dashboard';
import TargetIdentification from './pages/TargetIdentification';
import PathOptimization from './pages/PathOptimization';
import ThreatDetection from './pages/ThreatDetection';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-navy-900 text-gray-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/target-identification" element={<TargetIdentification />} />
            <Route path="/path-optimization" element={<PathOptimization />} />
            <Route path="/threat-detection" element={<ThreatDetection />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;