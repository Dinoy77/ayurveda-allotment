import React from 'react';

const NewsTicker = () => {
  return (
    <div style={styles.tickerContainer}>
      <div style={styles.tickerLabel}>LATEST NEWS</div>
      <div style={styles.tickerMarqueeWrapper}>
        <marquee style={styles.marqueeText}>
          All India Merit Quota Counselling 2026 Round 1 registration for Pharmacy has been started. 
          <span style={styles.newBadge}>New</span>
        </marquee>
      </div>
      <div style={styles.tickerControls}>
        <button style={styles.tickerButton}>❮</button>
        <button style={styles.tickerButton}>❚❚</button>
        <button style={styles.tickerButton}>❯</button>
      </div>
    </div>
  );
};

const styles = {
  tickerContainer: {
    backgroundColor: '#1e3a8a',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
  },
  tickerLabel: {
    backgroundColor: '#1e40af',
    padding: '12px 24px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
  },
  tickerMarqueeWrapper: {
    flex: 1,
    overflow: 'hidden',
    padding: '0 16px',
  },
  marqueeText: {
    fontSize: '14px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
  },
  newBadge: {
    backgroundColor: '#dc2626',
    fontSize: '12px',
    padding: '2px 4px',
    marginLeft: '8px',
    borderRadius: '4px',
  },
  tickerControls: {
    padding: '0 16px',
    display: 'flex',
    gap: '8px',
    fontSize: '20px',
  },
  tickerButton: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
  }
};

export default NewsTicker;