import React, { useState } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import CourseDetails from './pages/CourseDetails';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      {currentPage === 'home' ? (
        <Homepage onNavigate={(page) => setCurrentPage(page)} />
      ) : (
        <CourseDetails 
          initialCourse={currentPage} 
          onNavigate={(page) => setCurrentPage(page)} 
        />
      )}
    </div>
  );
}

export default App;