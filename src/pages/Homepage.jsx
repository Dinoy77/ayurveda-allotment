import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import NewsTicker from '../components/NewsTicker';
import MainContent from '../components/MainContent';
import UsefulLinks from '../components/UsefulLinks';
import Footer from '../components/Footer';

const Homepage = ({ onNavigate }) => {
  return (
    <div style={styles.container}>
      <TopBar />
      <Header />
      {/* Changed currentPage={activeCourse} to currentPage="home" */}
      <Navbar onNavigate={onNavigate} currentPage="home" />
      <NewsTicker />
      <MainContent />
      <UsefulLinks />
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#333',
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }
};

export default Homepage;