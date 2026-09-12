import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <TopBar />
      <Header />
      <Navbar />

      <main style={styles.mainWrapper}>
        <div style={styles.pageContent}>
          <h1 style={styles.mainHeading}>Contact Us</h1>

          <div style={styles.contentSection}>
            <div style={styles.extraSection}>
              <h3 style={styles.sectionHeading}>Association of Pharmacy Colleges of India - APCI</h3>
              <p style={styles.paragraph}>
                # ½ - 4B, 4th Floor Convent Building Lavelle Road, Bangalore<br />
                Karnataka – 560001
              </p>
            </div>

            <div style={styles.extraSection}>
              <h3 style={styles.sectionHeading}>Office Timings</h3>
              <p style={styles.paragraph}>
                Monday to Friday 10 AM to 5 PM<br />
                Not Operational on Sunday & Other Public Holidays
              </p>
            </div>

            <div style={styles.extraSection}>
              <h3 style={styles.sectionHeading}>Assistance to Candidates</h3>
              <p style={styles.paragraph}>
                For queries on the online application form and selection related matters, please write to:<br />
                Email: <a href="mailto:studenthelpdesk@pcc-india.org" style={styles.link}>studenthelpdesk@pcc-india.org</a>
              </p>
            </div>

            <div style={styles.extraSection}>
              <h3 style={styles.sectionHeading}>Contact Number</h3>
              <p style={styles.paragraph}>
                Coming soon.
              </p>
            </div>
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
  extraSection: {
    marginBottom: '32px',
  },
  sectionHeading: {
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#000000',
  },
  paragraph: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#374151',
  },
  link: {
    color: '#1e40af',
    textDecoration: 'none',
  },
};

export default ContactUs;