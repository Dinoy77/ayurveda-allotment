import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'UG Pharmacy', path: '/ug-pharmacy' }, 
    { label: 'PG Pharmacy', path: '/pg-pharmacy' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <li key={item.path} style={styles.listItem}>
              <Link
                to={item.path}
                style={{
                  ...styles.navItem,
                  ...(isActive ? styles.navItemActive : {}),
                }}
              >
                {item.label}
              </Link>
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
  listItem: {
    display: 'block',
  },
  navItem: {
    display: 'block',
    padding: '12px 24px',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'background-color 0.2s ease',
    textDecoration: 'none',
    color: 'inherit',   
  },
  navItemActive: {
    backgroundColor: '#eab308',
    fontWeight: '600',
  },
};

export default Navbar;