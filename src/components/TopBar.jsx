import React from 'react';

const TopBar = () => {
  return (
    <div style={styles.topBar}>
      <div style={styles.flexRowGroup}>
        {/* Government tags removed */}
      </div>
      <div style={styles.topBarIcons}>
        <span style={styles.icon}>A-</span>
        <span style={styles.icon}>A</span>
        <span style={styles.icon}>A+</span>
        <span style={styles.icon}>🔍</span>
        <span style={styles.icon}>♿</span>
      </div>
    </div>
  );
};

const styles = {
  topBar: {
    backgroundColor: '#e5e7eb',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '4px 16px',
    borderBottom: '1px solid #d1d5db',
  },
  flexRowGroup: {
    display: 'flex',
    gap: '24px',
  },
  topBarText: {
    lineHeight: '1.4',
  },
  boldText: {
    fontWeight: 'bold',
  },
  topBarIcons: {
    display: 'flex',
    gap: '12px',
    fontSize: '16px',
  },
  icon: {
    cursor: 'pointer',
  }
};

export default TopBar;