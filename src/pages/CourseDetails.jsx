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
    counsellingHeading: 'Counselling & Admission Process',
    counsellingParagraphs: [
      'The UG Pharmacy Counselling Authority assists eligible students throughout the B.Pharm counselling, admission and college-allotment process. Based on Class 12 marks, eligibility, merit, college preference and seat availability, the Authority helps students secure admission to suitable recognised pharmacy colleges across India.',
      'Students must register by submitting the required personal and academic details, including their Class 12 marks.'
    ],
    eligibilityHeading: 'Eligibility',
    eligibilityText: 'Applicants must have passed the Class 12 examination with an aggregate of at least 50% marks, having studied Physics and Chemistry, along with any one of the following subjects:',
    eligibilityList: [
      'Biology',
      'Mathematics',
      'Computer Science'
    ],
    conclusionText: 'Only eligible and registered students will be considered for merit analysis, counselling and seat allotment. Final admission will be subject to document verification, merit ranking, college preference, seat availability and the applicable rules of the concerned institution and regulatory authorities.',
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
              
              {/* Introduction Section */}
              {currentData.introHeading && (
                <div style={styles.extraSection}>
                  <h3 style={styles.sectionHeading}>{currentData.introHeading}</h3>
                  {currentData.introParagraphs.map((para, index) => (
                    <p key={index} style={styles.paragraph}>{para}</p>
                  ))}
                </div>
              )}

              {/* Counselling Section */}
              {currentData.counsellingHeading && (
                <div style={styles.extraSection}>
                  <h3 style={styles.sectionHeading}>{currentData.counsellingHeading}</h3>
                  {currentData.counsellingParagraphs.map((para, index) => (
                    <p key={index} style={styles.paragraph}>{para}</p>
                  ))}
                </div>
              )}

              {/* Eligibility Section */}
              {currentData.eligibilityHeading && (
                <div style={styles.extraSection}>
                  <h3 style={styles.sectionHeading}>{currentData.eligibilityHeading}</h3>
                  <p style={styles.paragraph}>{currentData.eligibilityText}</p>
                  <p style={styles.list}>
                    {currentData.eligibilityList.map((item, index) => (
                      <p key={index} style={styles.listItem}>{item}</p>
                    ))}
                  </p>
                  {currentData.conclusionText && (
                    <p style={{...styles.paragraph, marginTop: '16px'}}>{currentData.conclusionText}</p>
                  )}
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
  list: {
    paddingLeft: '24px',
    marginBottom: '16px',
    color: '#374151',
    fontSize: '15px',
    lineHeight: '1.6',
  },
  listItem: {
    marginBottom: '8px',
    fontWeight:'bold'
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