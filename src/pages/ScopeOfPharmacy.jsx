import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ScopeOfPharmacy = () => {
  return (
    <div style={styles.container}>
      <TopBar />
      <Header />
      <Navbar />

      <main style={styles.mainWrapper}>
        <div style={styles.pageContent}>
          <h1 style={styles.mainHeading}>Scope of Pharmacy</h1>
          <div style={styles.contentSection}>
            <p style={styles.paragraph}>
              Content for this page will be added soon.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#f9fafb',
    color: '#333',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  mainWrapper: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
  pageContent: {
    paddingBottom: '40px',
    width: '100%',
  },
  mainHeading: {
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '24px',
    padding: '32px 100px 0',
    color: '#000000',
  },
  contentSection: {
    padding: '0 100px',
  },
  paragraph: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#374151',
    textAlign: 'justify',
  },
};

export default ScopeOfPharmacy;