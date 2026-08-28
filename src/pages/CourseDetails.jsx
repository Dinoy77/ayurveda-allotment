import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const courseData = {
  'UG Ayurveda': {
    title: 'UG Ayurveda Counselling',
    news: 'Candidates may contact the 24×7 toll-free helpline number provided under the "Contact Us" section for UG Ayurveda queries. You can also contact the helpline at 9999999999 or submit their queries via email to demo@gov.in.',
    subHeading: 'Online Under Graduate Ayurveda Seats Online Allotment process (Online Counseling)',
    description: 'All the NEET Under Graduate (BAMS/BSMS/BUMS/BHMS) aspirant candidates are hereby informed that counseling for All India Quota seats/ Institutional Quota/ Domicile (internal candidates) of Central Universities, National Institutes, and Deemed Universities for the Under Graduate session 2026 will be conducted by the central committee based on the latest notifications.'
  },
  'UG Pharmacy': {
    title: 'UG Pharmacy Counselling',
    news: 'Candidates may contact the 24×7 toll-free helpline number provided under the "Contact Us" section for UG Pharmacy queries. You can also contact the helpline at 9999999999 or submit their queries via email to demo@gov.in.',
    subHeading: 'Online Under Graduate Pharmacy Seats Online Allotment process (Online Counseling)',
    description: 'All the Under Graduate Pharmacy (B.Pharm/Pharm.D) aspirant candidates are hereby informed that counseling for All India Quota seats and affiliated central institute seats for the Under Graduate session 2026 will be carried out purely on a merit basis in accordance with the Pharmacy Council of India guidelines.'
  },
  'PG Ayurveda': {
    title: 'PG Ayurveda Counselling',
    news: 'Candidates may contact the 24×7 toll-free helpline number provided under the "Contact Us" section for PG Ayurveda queries. You can also contact the helpline at 9999999999 or submit their queries via email to demo@gov.in.',
    subHeading: 'Online Post Graduate Ayurveda Seats Online Allotment process (Online Counseling)',
    description: 'All the AIAPGET aspirant candidates are hereby informed that counseling for All India Quota seats for Post Graduate (MD/MS - Ayurveda) courses across Central Universities and National Institutes for the Post Graduate session 2026 will be conducted transparently through this central portal.'
  },
  'PG Pharmacy': {
    title: 'PG Pharmacy Counselling',
    news: 'Candidates may contact the 24×7 toll-free helpline number provided under the "Contact Us" section for PG Pharmacy queries. You can also contact the helpline at 9999999999 or submit their queries via email to demo@gov.in.',
    subHeading: 'Online Post Graduate Pharmacy Seats Online Allotment process (Online Counseling)',
    description: 'All the Post Graduate Pharmacy (M.Pharm) aspirant candidates are hereby informed that counseling for All India Quota seats across recognized central institutions for the Post Graduate session 2026 will be strictly processed according to the GPAT scores and respective category quotas.'
  }
};

const CourseDetails = ({ initialCourse, onNavigate }) => {
  const currentData = courseData[initialCourse];

  return (
    <div style={styles.container}>
      <TopBar />
      <Header />
      <Navbar onNavigate={onNavigate} currentPage={initialCourse} />

      <main style={styles.mainWrapper}>
        {currentData ? (
          <div style={styles.pageContent}>
            <div style={styles.newsBannerContainer}>
              <div style={styles.newsLabel}>
                LATEST NEWS
              </div>
              <div style={styles.newsContent}>
                {currentData.news}
              </div>
            </div>
            
            <h1 style={styles.mainHeading}>{currentData.title}</h1>

            <div style={styles.contentSection}>
              <h2 style={styles.subHeading}>{currentData.subHeading}</h2>
              <p style={styles.paragraph}>{currentData.description}</p>
            </div>
          </div>
        ) : (
          <div style={styles.constructionContainer}>
            <h1 style={styles.constructionHeading}>🚧 Page Under Construction 🚧</h1>
            <p style={styles.constructionText}>
              The content for <strong>{initialCourse}</strong> is currently being updated. Please check back later.
            </p>
          </div>
        )}
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
    padding: '0 32px', 
    color: '#000000',
  },
  newsBannerContainer: {
    display: 'flex',
    marginBottom: '40px',
    border: '1px solid #0f2b5b',
    borderTop: 'none', 
  },
  newsLabel: {
    backgroundColor: '#0f2b5b', 
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '18px',
    padding: '20px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
  },
  newsContent: {
    backgroundColor: '#15397a', 
    color: '#ffffff',
    fontSize: '15px',
    padding: '20px 24px',
    lineHeight: '1.5',
    flexGrow: 1,
  },
  contentSection: {
    marginTop: '24px',
    padding: '0 32px', 
  },
  subHeading: {
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#000000',
  },
  paragraph: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#374151',
    textAlign: 'justify',
  },
  constructionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 32px',
    textAlign: 'center',
    minHeight: '400px',
  },
  constructionHeading: {
    fontSize: '28px',
    color: '#1e3a8a',
    marginBottom: '16px',
    fontWeight: 'bold',
  },
  constructionText: {
    fontSize: '16px',
    color: '#4b5563',
  }
};

export default CourseDetails;