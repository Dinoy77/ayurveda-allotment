import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={{...styles.navItem, ...styles.navItemActive}}>Home</li>
        <li style={styles.navItem}>About Us</li>
        <li style={styles.navItem}>UG Ayurveda</li>
        <li style={styles.navItem}>UG Pharmacy</li>
        <li style={styles.navItem}>PG Ayurveda</li>
        <li style={styles.navItem}>PG Pharmacy</li>
        <li style={styles.navItem}>Video Tutorials</li>
        <li style={styles.navItem}>Contact Us</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#f3f4f6',
    borderTop: '1px solid #d1d5db',
    borderBottom: '1px solid #d1d5db',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '14px',
    fontWeight: '500',
    color: '#000',
  },
  navItem: {
    padding: '12px 24px',
    cursor: 'pointer',
  },
  navItemActive: {
    backgroundColor: '#eab308',
  }
};

export default Navbar;