import React from 'react';

const Header = () => {
  return (
    <div style={styles.header}>
      <div style={styles.headerLeft}>
        <div style={styles.logoCircle}>
          {/* Replaced text with the Government Emblem Logo */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
            alt="All India Quota Logo" 
            style={styles.aiqLogoImg} 
          />
        </div>
        <div style={styles.headerTitles}>
          <h2 style={styles.subHeading}>अखिल भारतीय कोटा आवंटन पोर्टल</h2>
          <h1 style={styles.mainHeading}>All India Merit Quota Allotment Portal</h1>
          <p style={styles.tagline}>Admission and eCounselling Services for Pharmacy & Ayurveda Session 2026</p>
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
  // Added style specifically for the AIQ/Emblem logo
  aiqLogoImg: {
    width: '70px',
    height: '70px',
    objectFit: 'contain',
  },
  headerTitles: {
    textAlign: 'center',
  },
  subHeading: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#4b5563',
    margin: '0 0 4px 0',
  },
  mainHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000',
    margin: '0 0 4px 0',
    letterSpacing: '0.5px',
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