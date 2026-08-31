import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import CourseDetails from './pages/CourseDetails';
import AboutUs from './pages/AboutUs';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/courses" element={<CourseDetails />} />
          <Route path="/ug-pharmacy" element={<CourseDetails />} />
          <Route path="/pg-pharmacy" element={<CourseDetails />} />
          <Route path="/contact" element={<CourseDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;