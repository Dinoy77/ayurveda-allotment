import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = ({ onNavigate }) => {
    return (
        <div style={styles.container}>
            <TopBar />
            <Header />
            <Navbar onNavigate={onNavigate} currentPage="about" />

            <main style={styles.mainWrapper}>
                <div style={styles.pageContent}>
                    <h1 style={styles.mainHeading}>About Us</h1>

                    <div style={styles.contentSection}>
                        <p style={styles.paragraph}>
                            Association of Pharmacy Colleges of India (APCI) is an organisation established with the objective of supporting and guiding eligible students in securing admission to recognised pharmacy colleges across India. APCI serves as a bridge between aspiring pharmacy students and reputed educational institutions offering professional pharmacy programmes.
                        </p>
                        <p style={styles.paragraph}>
                            Pharmacy education plays an important role in the healthcare sector, providing students with opportunities to build careers in pharmaceutical industries, hospitals, community pharmacy, research, quality control, regulatory affairs, clinical services, and other healthcare-related fields. APCI aims to make students and parents more aware of these opportunities and assist them in making informed decisions regarding their pharmacy education.
                        </p>

                        <div style={styles.extraSection}>
                            <h3 style={styles.sectionHeading}>Our Admission Support Services</h3>
                            <p style={styles.paragraph}>
                                APCI provides guidance and admission support to eligible students seeking admission to pharmacy programmes such as:
                            </p>
                            <ul style={{ ...styles.list, listStyle: 'none', paddingLeft: 0 }}>
                                <li style={styles.listItemBold}>Bachelor of Pharmacy (B.Pharm)</li>
                                <li style={styles.listItemBold}>Diploma in Pharmacy (D.Pharm)</li>
                            </ul>
                            <p style={styles.paragraph}>
                                Other eligible pharmacy-related programmes offered by recognised institutions.
                            </p>
                            <p style={styles.paragraph}>
                                APCI assists students by providing information regarding course eligibility, admission procedures, available institutions, academic requirements, documentation, and other relevant admission-related matters.
                            </p>
                        </div>

                        <div style={styles.extraSection}>
                            <h3 style={styles.sectionHeading}>Connecting Students with Institutions</h3>
                            <p style={styles.paragraph}>
                                One of APCI's key objectives is to create an effective platform connecting eligible students with recognised pharmacy colleges across India. Based on the student's eligibility and educational requirements, APCI helps students identify suitable institutions and understand the available admission opportunities.
                            </p>
                        </div>

                        <div style={styles.extraSection}>
                            <h3 style={styles.sectionHeading}>Our Vision</h3>
                            <p style={styles.visionText}>
                                "To become a trusted platform for pharmacy education admission guidance and student support, enabling eligible students to access quality pharmacy education and build rewarding careers in the pharmaceutical and healthcare sectors."
                            </p>
                        </div>

                        <div style={styles.extraSection}>
                            <h3 style={styles.sectionHeading}>Our Mission</h3>
                            <p style={styles.paragraph}>
                                APCI is committed to facilitating admission opportunities for eligible pharmacy students and creating awareness about recognised pharmacy education programmes. We provide students and parents with reliable admission guidance, connect aspiring students with suitable pharmacy institutions, and promote transparent and student-focused admission support — encouraging students to pursue professional careers in pharmacy and healthcare.
                            </p>
                        </div>

                        <div style={styles.extraSection}>
                            <h3 style={styles.sectionHeading}>Supporting the Future of Pharmacy Students</h3>
                            <p style={styles.paragraph}>
                                APCI believes that the right educational institution can play an important role in shaping a student's professional future. Through its admission support initiatives, APCI seeks to simplify the process of exploring pharmacy education opportunities and help students make informed, appropriate, and career-oriented decisions.
                            </p>
                        </div>

                        <div style={styles.closingBanner}>
                            <p style={styles.closingText}>
                                APCI – Connecting Eligible Students with Recognised Pharmacy Education Opportunities Across India.
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
        marginTop: '8px',
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
        textAlign: 'justify',
        marginBottom: '16px',
    },
    list: {
        margin: '0 0 16px',
        paddingLeft: '24px',
    },
    listItem: {
        fontSize: '15px',
        lineHeight: '1.8',
        color: '#374151',
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
    closingBanner: {
        marginTop: '16px',
        padding: '20px',
        backgroundColor: '#0f2b5b',
        borderRadius: '4px',
    },
    closingText: {
        color: '#ffffff',
        fontSize: '15px',
        fontWeight: '600',
        textAlign: 'center',
        margin: 0,
    },
    listItemBold: {
        fontSize: '15px',
        lineHeight: '1.8',
        color: '#111827',
        fontWeight: 'bold',
    },
};

export default AboutUs;