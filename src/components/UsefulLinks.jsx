import React from 'react';

const UsefulLinks = () => {
  return (
    <div style={styles.usefulLinksSection}>
      <h2 style={styles.usefulLinksHeading}>🔗 Useful Links</h2>
      <div style={styles.linksGrid}>
        <a href="#" style={styles.linkItem}>Participating Institutes</a>
        <a href="#" style={styles.linkItem}>Seat Matrix</a>
        <a href="#" style={styles.linkItem}>Fee Structure</a>
      </div>
    </div>
  );
};

const styles = {
  usefulLinksSection: {
    backgroundColor: '#1e3a8a',
    color: '#ffffff',
    padding: '48px 32px',
    borderBottom: '4px solid #172554',
  },
  usefulLinksHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  linksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    fontSize: '14px',
    opacity: 0.8,
  },
  linkItem: {
    color: '#ffffff',
    textDecoration: 'none',
  }
};

export default UsefulLinks;