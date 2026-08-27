import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerLinks}>
        <a href="#" style={styles.footerLink}>Terms of Use</a> /
        <a href="#" style={styles.footerLink}>Website Policies</a> /
        <a href="#" style={styles.footerLink}>Help</a> /
        <a href="#" style={styles.footerLink}>Contact Us</a>
      </div>
      
      <div style={styles.footerTextContainer}>
        <p>Content Owned and Managed by All India Merit Quota Allotment Portal</p>
        <p>Ministry of Electronics & Information Technology, Government of India</p>
        <p style={styles.lastUpdated}>Last Updated: Aug 24, 2026</p>
      </div>

      <div style={styles.footerLogos}>
         <div style={styles.footerLogoBox}>Powered by Swaas</div>
         <div style={styles.footerLogoBox}>Digital India</div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#111827',
    color: '#d1d5db',
    fontSize: '12px',
    padding: '32px',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    marginBottom: '24px',
  },
  footerLink: {
    color: '#d1d5db',
    textDecoration: 'none',
  },
  footerTextContainer: {
    textAlign: 'center',
    marginBottom: '24px',
    lineHeight: '1.6',
    opacity: 0.8,
  },
  lastUpdated: {
    marginTop: '16px',
    fontWeight: 'bold',
    color: '#9ca3af',
  },
  footerLogos: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    opacity: 0.7,
  },
  footerLogoBox: {
    height: '40px',
    padding: '0 16px',
    backgroundColor: '#1f2937',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
  }
};

export default Footer;