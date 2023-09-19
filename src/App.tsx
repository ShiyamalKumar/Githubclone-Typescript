import React, { useState } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import ListingPage from './pages/ListingPage';
import Details from './pages/Details';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      
      <Navbar />
      <Router>
        <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/listing" element={<ListingPage />} />
          <Route path="/details/:repoId" element={<Details />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
