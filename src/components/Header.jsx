import React from 'react';
// 1. Import your local image file here
import logoImage from '../assets/logo.jpeg'; 

const Header = () => {
  return (
    <div style={styles.header}>
      <div style={styles.headerLeft}>
        <div style={styles.logoCircle}>
          {/* 2. Use the imported variable in curly braces */}
          <img 
            src={logoImage} 
            alt="Association Logo" 
            style={styles.aiqLogoImg} 
          />
        </div>
        <div style={styles.headerTitles}>
          {/* 3. Updated Headings */}
          <h1 style={styles.mainHeading}>Association of Pharmacy Colleges in India</h1>
          <h2 style={styles.subHeading}>All India Merit Quota Allotment Portal</h2>
          <p style={styles.tagline}>Admission and eCounselling Services for Pharmacy Session 2026</p>
        </div>
      </div>
      <div style={styles.headerRight}>
         <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEXHt77b9TRbQ-eekqmlEnywJWro-XcU9kuZ4Vx7RLw&s=10" 
            alt="Digital India Logo" 
            style={styles.digitalIndiaImg} 
         />
      </div>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#ffffff',
    padding: '16px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  aiqLogoImg: {
    width: '90x',
    height: '90px',
    objectFit: 'contain',
  },
  headerTitles: {
    textAlign: 'center',
  },
  mainHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000',
    margin: '0 0 4px 0',
    letterSpacing: '0.5px',
  },
  subHeading: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1e40af', // Changed to blue to distinguish it nicely from the main heading
    margin: '0 0 4px 0',
  },
  tagline: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#4b5563',
    margin: '0',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
  },
  digitalIndiaImg: {
    width: '120px',
    height: 'auto',
    objectFit: 'contain',
  }
};

export default Header;