import React from 'react';

const MainContent = () => {
  return (
    <main style={styles.mainContent}>
      <h2 style={styles.sectionHeading}>INTRODUCTION</h2>
      <p style={styles.paragraph}>
        In compliance with the directives of the Ministry of Ayush and Pharmacy Council of India, this portal is entrusted with the responsibility of holding online counselling for the All India Merit Quota (AIQ) seats for Under Graduate (UG) and Post Graduate (PG) courses in Ayurveda, Unani, Siddha, Homeopathy (AYUSH), and Pharmacy across the country. The central allocation ensures transparency, merit-based selection, and a streamlined admission process as per the latest gazette notifications and respective court orders.
      </p>
      <button style={styles.primaryButton}>View More</button>

      <div style={styles.infoBanner}>
        <p style={styles.infoBannerText}>
          All candidates must complete their registration and choice-filling before the deadline. Please beware of unauthorized agents promising guaranteed seats. The seat allotment process is strictly merit-based, transparent, and fully computer-automated.
        </p>
        
        {/* Registration Button Area */}
        <div style={styles.registrationAction}>
          <a href="/registration-form" style={styles.registerButton}>
            Click Here for New Registration
          </a>
        </div>
      </div>
    </main>
  );
};

const styles = {
  mainContent: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    padding: '40px 32px',
  },
  sectionHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  paragraph: {
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.6',
    marginBottom: '24px',
    textAlign: 'justify',
  },
  primaryButton: {
    backgroundColor: '#eab308',
    color: '#000',
    fontWeight: '500',
    padding: '8px 24px',
    borderRadius: '4px',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '32px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  },
  infoBanner: {
    border: '1px solid #facc15',
    padding: '16px',
    textAlign: 'center',
    borderRadius: '4px',
    backgroundColor: '#fefce8',
  },
  infoBannerText: {
    color: '#ca8a04',
    fontWeight: '500',
    fontSize: '15px',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  registrationAction: {
    marginTop: '16px',
    textAlign: 'center', // Centers the button in the banner
  },
  registerButton: {
    display: 'inline-block',
    backgroundColor: '#169f48', // A nice action green
    color: '#ffffff',
    padding: '10px 24px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '15px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    cursor: 'pointer',
  }
};

export default MainContent;