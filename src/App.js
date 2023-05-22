import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rockets from './pages/Rockets';
import Dragons from './pages/Dragons';
import Profile from './pages/Profile';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="dragons" element={<Dragons />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
