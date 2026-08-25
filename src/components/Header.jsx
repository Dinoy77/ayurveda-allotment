import React from 'react';

const Header = () => {
  return (
    <div style={styles.header}>
      <div style={styles.headerLeft}>
        <div style={styles.logoCircle}>
          AIQ Logo
        </div>
        <div style={styles.headerTitles}>
          <h2 style={styles.subHeading}>अखिल भारतीय कोटा आवंटन पोर्टल</h2>
          <h1 style={styles.mainHeading}>All India Quota Allotment Portal</h1>
          <p style={styles.tagline}>Admission and eCounselling Services for Pharmacy & Ayurveda Session 2026</p>
        </div>
      </div>
      <div style={styles.headerRight}>
         <div style={styles.digitalIndiaLogo}>Digital India Logo</div>
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
  logoCircle: {
    width: '80px',
    height: '80px',
    backgroundColor: '#dbeafe',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1e40af',
    fontWeight: 'bold',
    border: '2px solid #1e40af',
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
  digitalIndiaLogo: {
    width: '128px',
    height: '48px',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#6b7280',
  }
};

export default Header;