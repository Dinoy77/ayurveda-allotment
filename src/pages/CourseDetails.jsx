import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const courseData = {
  'UG Pharmacy': {
    title: 'UG Pharmacy',
    news: 'Candidates may contact the 24×7 toll-free helpline number provided under the "Contact Us" section for UG Pharmacy queries. You can also contact the helpline at 9999999999 or submit their queries via email to demo@gov.in.',
    // Removed the allotment process description to ONLY show Intro and Vision
    introHeading: 'Introduction – Association of Pharmacy Colleges of India',
    introParagraphs: [
      'Association of Pharmacy Colleges of India (APCI) is an organisation dedicated to facilitating merit-based, affordable and accessible pharmacy education through B.Pharm and D.Pharm programmes across India. APCI aims to bridge the gap between eligible students and recognised pharmacy institutions with available seats, helping students secure admissions based on merit, eligibility, course and location preferences, and affordable fee structures. The Association also supports the effective utilisation of available pharmacy seats while providing students and parents with transparent information, counselling and admission assistance.'
    ],
    visionHeading: 'Vision',
    visionText: '"Quality Pharmacy Education – Accessible, Affordable and Merit-Based for Every Eligible Student."'
  },
  'PG Pharmacy': {
    title: 'PG Pharmacy',
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
              
              {/* Only render subHeading and description if they exist for this course */}
              {currentData.subHeading && (
                <h2 style={styles.subHeading}>{currentData.subHeading}</h2>
              )}
              {currentData.description && (
                <p style={styles.paragraph}>{currentData.description}</p>
              )}
              
              {/* Introduction Section */}
              {currentData.introHeading && (
                <div style={styles.extraSection}>
                  <h3 style={styles.sectionHeading}>{currentData.introHeading}</h3>
                  {currentData.introParagraphs.map((para, index) => (
                    <p key={index} style={styles.paragraph}>{para}</p>
                  ))}
                </div>
              )}

              {/* Vision Section */}
              {currentData.visionHeading && (
                <div style={styles.extraSection}>
                  <h3 style={styles.sectionHeading}>{currentData.visionHeading}</h3>
                  <p style={styles.visionText}>{currentData.visionText}</p>
                </div>
              )}
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
    padding: '24px 32px',
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
  extraSection: {
    marginBottom: '32px', // changed from marginTop to marginBottom so it spaces out properly
  },
  sectionHeading: {
    fontSize: '22px', // Matched the size of previous subheadings
    fontWeight: '600',
    marginBottom: '16px',
    color: '#000000', // Changed to black to match the theme
  },
  paragraph: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#374151',
    textAlign: 'justify',
    marginBottom: '16px', 
  },
  visionText: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#111827',
    fontWeight: '600',
    fontStyle: 'italic',
    padding: '16px',
    backgroundColor: '#f3f4f6',
    borderLeft: '4px solid #1e3a8a',
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