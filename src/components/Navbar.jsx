import React from 'react';

const Navbar = ({ onNavigate, currentPage = 'home' }) => {
  const navItems = [
    { label: 'Home', key: 'home' },
    { label: 'About Us', key: 'about' },
    { label: 'UG Ayurveda', key: 'UG Ayurveda' },
    { label: 'UG Pharmacy', key: 'UG Pharmacy' },
    { label: 'PG Ayurveda', key: 'PG Ayurveda' },
    { label: 'PG Pharmacy', key: 'PG Pharmacy' },
    { label: 'Video Tutorials', key: 'tutorials' },
    { label: 'Contact Us', key: 'contact' },
  ];

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        {navItems.map((item) => {
          const isActive = currentPage === item.key;
          return (
            <li
              key={item.key}
              style={{
                ...styles.navItem,
                ...(isActive ? styles.navItemActive : {}),
              }}
              onClick={() => onNavigate && onNavigate(item.key)}
            >
              {item.label}
            </li>
          );
        })}
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
    userSelect: 'none',
    transition: 'background-color 0.2s ease',
  },
  navItemActive: {
    backgroundColor: '#eab308',
    fontWeight: '600',
  },
};

export default Navbar;