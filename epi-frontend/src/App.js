import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import DataSources from './components/DataSources';
import ResultsPage from './components/ResultsPage';
import PolicySummary from './components/PolicySummary';
import Report from './components/Report';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/data-sources" element={<DataSources />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/policy-summary" element={<PolicySummary />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
