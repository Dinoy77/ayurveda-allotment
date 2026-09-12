import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import CourseDetails from './pages/CourseDetails';
import AboutUs from './pages/AboutUs';
import RegistrationPage from './pages/RegistrationPage';
import ChatBot from './components/ChatBot';
import ScopeOfPharmacy from './pages/ScopeOfPharmacy';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/scope-of-pharmacy" element={<ScopeOfPharmacy />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/courses" element={<CourseDetails />} />
          <Route path="/ug-pharmacy" element={<CourseDetails />} />
          <Route path="/pg-pharmacy" element={<CourseDetails />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <ChatBot />
      </div>
    </BrowserRouter>
  );
}

export default App;