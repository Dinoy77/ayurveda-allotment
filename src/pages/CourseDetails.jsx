import React from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const courseData = {
  'UG Pharmacy': {
    title: 'UG Pharmacy',
    news: 'Candidates may contact the 24×7 toll-free helpline number provided under the "Contact Us" section for UG Pharmacy queries. You can also contact the helpline at 9999999999 or submit their queries via email to demo@gov.in.',
    introHeading: 'About Bachelor of Pharmacy (B.Pharm)',
    introParagraphs: [
      'Bachelor of Pharmacy (B.Pharm) is a 4-Year Under Graduate Professional Degree focused on Medicines, Pharmaceutical Sciences, Drug Development, Manufacturing, Quality Control, and Patient Care. It prepares students for careers across the Pharmaceutical, Healthcare, Research, Manufacturing, and Regulatory Sectors.'
    ],
    visionHeading: 'Vision',
    visionText: '"Quality Pharmacy Education – Accessible, Affordable and Merit-Based for Every Eligible Student."'
  },
  'PG Pharmacy': {
    title: 'PG Pharmacy',
    news: 'Candidates may contact the 24×7 toll-free helpline number provided under the "Contact Us" section for PG Pharmacy queries. You can also contact the helpline at 9999999999 or submit their queries via email to demo@gov.in.',
    introHeading: 'About Master of Pharmacy (M.Pharm)',
    introParagraphs: [
      'Master of Pharmacy (M.Pharm) is a 2-Year Post Graduate Professional Degree designed to provide advanced, specialized knowledge in pharmaceutical sciences. It offers deep dives into specializations such as Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, and Pharmacognosy. This program equips graduates with high-level research skills, clinical expertise, and industrial proficiency, preparing them for leadership roles in Research & Development, clinical trials, regulatory affairs, and academia.'
    ]
  }
};

// Map URL paths to the keys in your courseData object
const routeToCourseMap = {
  '/ug-pharmacy': 'UG Pharmacy',
  '/pg-pharmacy': 'PG Pharmacy',
};

const CourseDetails = () => {
  const location = useLocation();
  const courseKey = routeToCourseMap[location.pathname];
  const currentData = courseData[courseKey];

  return (
    <div style={styles.container}>
      <TopBar />
      <Header />
      <Navbar />

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
              
              {currentData.subHeading && (
                <h2 style={styles.subHeading}>{currentData.subHeading}</h2>
              )}
              {currentData.description && (
                <p style={styles.paragraph}>{currentData.description}</p>
              )}
              
              {currentData.introHeading && (
                <div style={styles.extraSection}>
                  <h3 style={styles.sectionHeading}>{currentData.introHeading}</h3>
                  {currentData.introParagraphs.map((para, index) => (
                    <p key={index} style={styles.paragraph}>{para}</p>
                  ))}
                </div>
              )}

            </div>
          </div>
        ) : (
          <div style={styles.constructionContainer}>
            <h1 style={styles.constructionHeading}>🚧 Page Not Found 🚧</h1>
            <p style={styles.constructionText}>
              The content you are looking for does not exist or is currently being updated.
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
    padding: '0 100px', 
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
    padding: '0 100px', 
  },
  subHeading: {
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#000000',
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
    textAlign: 'justify',
    marginBottom: '16px', 
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