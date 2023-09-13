import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import ListingPage from './ListingPage';
import Details from './Details';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Router>
        <Routes>
          <Route path="/" exact element={<ListingPage />} />
          <Route path="/details/:repoId" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
