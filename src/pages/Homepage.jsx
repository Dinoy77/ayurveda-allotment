import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import NewsTicker from '../components/NewsTicker';
import MainContent from '../components/MainContent';
import UsefulLinks from '../components/UsefulLinks';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div style={styles.container}>
      <TopBar />
      <Header />
      <Navbar currentPage="home" />
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