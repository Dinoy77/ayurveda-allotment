import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainContent = () => {
  const navigate = useNavigate();

  return (
    <main style={styles.mainContent}>
      <h2 style={styles.sectionHeadingCentered}>Introduction – Association of Pharmacy Colleges of India</h2>
      <p style={styles.paragraph}>
        Association of Pharmacy Colleges of India (APCI) is an organisation dedicated to facilitating merit-based, affordable and accessible pharmacy education through B.Pharm and D.Pharm programmes across India. APCI aims to bridge the gap between eligible students and recognised pharmacy institutions with available seats, helping students secure admissions based on merit, eligibility, course and location preferences, and affordable fee structures. The Association also supports the effective utilisation of available pharmacy seats while providing students and parents with transparent information, counselling and admission assistance.
      </p>

      <h2 style={styles.sectionHeadingCentered}>Vision</h2>
      <div style={styles.visionContainer}>
        <p style={styles.visionText}>
          "Quality Pharmacy Education – Accessible, Affordable and Merit-Based for Every Eligible Student."
        </p>
      </div>

      <div style={styles.infoBanner}>
        <p style={styles.infoBannerText}>
          All candidates must complete their registration and choice-filling before the deadline. Please beware of unauthorized agents promising guaranteed seats.
        </p>

        <div style={styles.registrationAction}>
          <button 
            style={styles.registerButton}
            onClick={() => navigate('/register')}
          >
            Click Here for New Registration
          </button>
        </div>
      </div>
    </main>
  );
};

const styles = {
  mainContent: { flexGrow: 1, backgroundColor: '#ffffff', padding: '40px 38px' },
  sectionHeadingCentered: { fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', color: '#000000' },
  paragraph: { fontSize: '15px', color: '#374151', lineHeight: '1.6', marginBottom: '32px', textAlign: 'justify' },
  visionContainer: { backgroundColor: '#f3f4f6', borderLeft: '4px solid #1e3a8a', padding: '24px 16px', marginBottom: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  visionText: { fontSize: '16px', fontWeight: '600', fontStyle: 'italic', color: '#111827', margin: 0, textAlign: 'center' },
  infoBanner: { border: '1px solid #facc15', padding: '16px', textAlign: 'center', borderRadius: '4px', backgroundColor: '#fefce8' },
  infoBannerText: { color: '#ca8a04', fontWeight: '500', fontSize: '14px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' },
  registrationAction: { marginTop: '16px', textAlign: 'center' },
  registerButton: { display: 'inline-block', backgroundColor: '#169f48', color: '#ffffff', padding: '10px 24px', borderRadius: '4px', border: 'none', fontWeight: 'bold', fontSize: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', cursor: 'pointer', textDecoration: 'none' },
};

export default MainContent;