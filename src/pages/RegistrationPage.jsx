import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', dob: '', course: '',
    alternatePhone: '', address: '', pincode: '', district: '', state: '',
    tenthPercentage: '', twelfthPercentage: '', subjectStream: '', subject1: '',
    subject2: '', subject3: '', subject1Marks: '', subject2Marks: '', subject3Marks: '',
    fatherName: '', fatherOccupation: '', fatherSalary: '', fatherPhone: '', fatherEmail: '',
    motherName: '', motherOccupation: '', motherSalary: '', motherPhone: '', motherEmail: '',
    declarationAccepted: true,
  });

  const [files, setFiles] = useState({
    photo: null, signature: null, tenthMarksCard: null, twelfthMarksCard: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles((prev) => ({
      ...prev,
      [name]: selectedFiles[0] || null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.declarationAccepted) {
      setError('Please accept the declaration before submitting.');
      return;
    }
    setError('');
    setSubmitting(true);

    try {
      const dataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        dataToSend.append(key, formData[key]);
      });
      Object.keys(files).forEach((key) => {
        if (files[key]) dataToSend.append(key, files[key]);
      });

      const response = await fetch('/api/send-registration', { method: 'POST', body: dataToSend });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while submitting your registration.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <TopBar />
      <Header />
      <Navbar />

      <main style={styles.mainContent}>
        <div style={styles.formContainer}>
          {submitted ? (
            <div style={styles.successMessage}>
              <div style={styles.successIcon}>✓</div>
              <h2 style={styles.successTitle}>Application Received!</h2>
              <p style={styles.successText}>
                Your registration has been submitted successfully. Our admissions team will review your details and contact you shortly.
              </p>
            </div>
          ) : (
            <>
              <div style={styles.formHeaderBanner}>
                <h1 style={styles.pageTitle}>Student Registration Portal</h1>
                <p style={styles.pageSubtitle}>Please fill in all the mandatory fields carefully before submitting.</p>
              </div>
              
              <form onSubmit={handleSubmit} style={styles.form}>
                
                {/* ================= 1. Personal Details ================= */}
                <div style={styles.sectionBlock}>
                  <div style={styles.sectionHeadingWrapper}>
                    <h3 style={styles.sectionHeading}>Personal Details</h3>
                  </div>
                  
                  <div style={styles.grid2}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>First Name <span style={styles.required}>*</span></label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} style={styles.input} required />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Last Name <span style={styles.required}>*</span></label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} style={styles.input} required />
                    </div>
                  </div>

                  <div style={styles.grid2}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Email <span style={styles.required}>*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={styles.input} required />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Phone No <span style={styles.required}>*</span></label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} style={styles.input} required />
                    </div>
                  </div>

                  <div style={styles.grid2}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Date of Birth <span style={styles.required}>*</span></label>
                      <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} style={styles.input} required />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Select Course <span style={styles.required}>*</span></label>
                      <select name="course" value={formData.course} onChange={handleInputChange} style={styles.select} required>
                        <option value="">-- Choose a Program --</option>
                        <option value="B.Pharm">B.Pharm</option>
                        <option value="D.Pharm">D.Pharm</option>
                        {/* <option value="Pharm.D">Pharm.D</option> */}
                        <option value="M.Pharm">M.Pharm</option>
                      </select>
                    </div>
                  </div>

                  <div style={styles.grid2}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Alternate No</label>
                      <input type="tel" name="alternatePhone" value={formData.alternatePhone} onChange={handleInputChange} style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Address <span style={styles.required}>*</span></label>
                      <textarea name="address" rows={2} value={formData.address} onChange={handleInputChange} style={styles.textarea} required />
                    </div>
                  </div>

                  <div style={styles.grid3}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Pincode</label>
                      <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>District <span style={styles.required}>*</span></label>
                      <input type="text" name="district" value={formData.district} onChange={handleInputChange} style={styles.input} required />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>State <span style={styles.required}>*</span></label>
                      <input type="text" name="state" value={formData.state} onChange={handleInputChange} style={styles.input} required />
                    </div>
                  </div>
                </div>

                {/* ================= 2. Academic Details ================= */}
                <div style={styles.sectionBlock}>
                  <div style={styles.sectionHeadingWrapper}>
                    <h3 style={styles.sectionHeading}>Academic Details</h3>
                  </div>
                  
                  <div style={styles.grid2}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>10th Board Percentage <span style={styles.required}>*</span></label>
                      <input type="text" name="tenthPercentage" value={formData.tenthPercentage} onChange={handleInputChange} style={styles.input} required />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>12th Board Percentage <span style={styles.required}>*</span></label>
                      <input type="text" name="twelfthPercentage" value={formData.twelfthPercentage} onChange={handleInputChange} style={styles.input} required />
                    </div>
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Subject <span style={styles.required}>*</span></label>
                    <select name="subjectStream" value={formData.subjectStream} onChange={handleInputChange} style={styles.select} required>
                      <option value="">-- Select Stream --</option>
                      <option value="Physics, Chemistry, Biology">Physics, Chemistry, Biology</option>
                      <option value="Physics, Chemistry, Mathematics">Physics, Chemistry, Mathematics</option>
                      <option value="PCMB">PCMB</option>
                    </select>
                  </div>

                  <div style={styles.grid3}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Specify Subject 1 <span style={styles.required}>*</span></label>
                      <select name="subject1" value={formData.subject1} onChange={handleInputChange} style={styles.select} required>
                        <option value="">-- Select --</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="Mathematics">Mathematics</option>
                      </select>
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Subject 2</label>
                      <select name="subject2" value={formData.subject2} onChange={handleInputChange} style={styles.select}>
                        <option value="">-- Select --</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="Mathematics">Mathematics</option>
                      </select>
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Subject 3</label>
                      <select name="subject3" value={formData.subject3} onChange={handleInputChange} style={styles.select}>
                        <option value="">-- Select --</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="Mathematics">Mathematics</option>
                      </select>
                    </div>
                  </div>

                  <div style={styles.grid3}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Marks/100 (Subject 1) <span style={styles.required}>*</span></label>
                      <input type="number" name="subject1Marks" value={formData.subject1Marks} onChange={handleInputChange} style={styles.input} required />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Marks/100 (Subject 2) <span style={styles.required}>*</span></label>
                      <input type="number" name="subject2Marks" value={formData.subject2Marks} onChange={handleInputChange} style={styles.input} required />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Marks/100 (Subject 3) <span style={styles.required}>*</span></label>
                      <input type="number" name="subject3Marks" value={formData.subject3Marks} onChange={handleInputChange} style={styles.input} required />
                    </div>
                  </div>
                </div>

                {/* ================= 3. Parent / Guardian Details ================= */}
                <div style={styles.sectionBlock}>
                  <div style={styles.sectionHeadingWrapper}>
                    <h3 style={styles.sectionHeading}>Parent / Guardian Details</h3>
                  </div>

                  <div style={styles.grid3}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Father's Name <span style={styles.required}>*</span></label>
                      <input type="text" name="fatherName" value={formData.fatherName} onChange={handleInputChange} style={styles.input} required />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Occupation <span style={styles.required}>*</span></label>
                      <input type="text" name="fatherOccupation" value={formData.fatherOccupation} onChange={handleInputChange} style={styles.input} required />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Annual Salary</label>
                      <input type="text" name="fatherSalary" value={formData.fatherSalary} onChange={handleInputChange} style={styles.input} />
                    </div>
                  </div>

                  <div style={styles.grid2}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Father's Phone No <span style={styles.required}>*</span></label>
                      <input type="tel" name="fatherPhone" value={formData.fatherPhone} onChange={handleInputChange} style={styles.input} required />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Father's Email <span style={styles.required}>*</span></label>
                      <input type="email" name="fatherEmail" value={formData.fatherEmail} onChange={handleInputChange} style={styles.input} required />
                    </div>
                  </div>

                  <div style={styles.grid3}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Mother's Name <span style={styles.required}>*</span></label>
                      <input type="text" name="motherName" value={formData.motherName} onChange={handleInputChange} style={styles.input} required />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Occupation <span style={styles.required}>*</span></label>
                      <input type="text" name="motherOccupation" value={formData.motherOccupation} onChange={handleInputChange} style={styles.input} required />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Annual Salary</label>
                      <input type="text" name="motherSalary" value={formData.motherSalary} onChange={handleInputChange} style={styles.input} />
                    </div>
                  </div>

                  <div style={styles.grid2}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Mother's Phone No <span style={styles.required}>*</span></label>
                      <input type="tel" name="motherPhone" value={formData.motherPhone} onChange={handleInputChange} style={styles.input} required />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Mother's Email <span style={styles.required}>*</span></label>
                      <input type="email" name="motherEmail" value={formData.motherEmail} onChange={handleInputChange} style={styles.input} required />
                    </div>
                  </div>
                </div>

                {/* ================= 4. Documents ================= */}
                <div style={styles.sectionBlock}>
                  <div style={styles.sectionHeadingWrapper}>
                    <h3 style={styles.sectionHeading}>Documents</h3>
                  </div>
                  
                  <div style={styles.grid2}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Photo <span style={styles.required}>*</span></label>
                      <input type="file" name="photo" accept="image/*" onChange={handleFileChange} style={styles.fileInput} required />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Signature <span style={styles.required}>*</span></label>
                      <input type="file" name="signature" accept="image/*" onChange={handleFileChange} style={styles.fileInput} required />
                    </div>
                  </div>

                  <div style={styles.grid2}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>10th Marks Card <span style={styles.required}>*</span></label>
                      <input type="file" name="tenthMarksCard" accept=".pdf,image/*" onChange={handleFileChange} style={styles.fileInput} required />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>12th Marks Card <span style={styles.required}>*</span></label>
                      <input type="file" name="twelfthMarksCard" accept=".pdf,image/*" onChange={handleFileChange} style={styles.fileInput} required />
                    </div>
                  </div>
                </div>

                {/* ================= Declaration ================= */}
                <div style={styles.declarationSection}>
                  <input type="checkbox" name="declarationAccepted" checked={formData.declarationAccepted} onChange={handleInputChange} style={styles.checkbox} id="declaration" required />
                  <label htmlFor="declaration" style={styles.declarationText}>
                    I hereby solemnly affirm that the statement made and information furnished in my application and also in all enclosures thereto submitted by me are true. I declare that I will, if admitted, abide by the rules and regulations of the college.
                  </label>
                </div>

                {error && <p style={styles.errorText}>{error}</p>}

                <div style={styles.submitWrapper}>
                  <button type="submit" style={styles.submitBtn} disabled={submitting}>
                    {submitting ? 'Processing...' : 'Submit Application'}
                  </button>
                </div>

              </form>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  pageWrapper: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#f1f5f9', // Slightly cooler, modern gray background
    color: '#333',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    flexGrow: 1,
    padding: '48px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '900px',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden', // Ensures the header banner stays within border radius
  },
  pageTitle: {
    fontSize: '28px',
    fontWeight: '700',
    margin: '24px 0 8px 0',
  },
  pageSubtitle: {
    fontSize: '15px',
    color: '#1e40af',
    margin: 0,
    fontWeight: '400',
  },
  form: {
    padding: '40px 48px',
  },
  sectionBlock: {
    marginBottom: '40px',
  },
  sectionHeadingWrapper: {
    borderBottom: '2px solid #f1f5f9',
    marginBottom: '24px',
    paddingBottom: '8px',
  },
  sectionHeading: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#0f2b5b', 
    margin: 0,
    display: 'inline-block',
    borderBottom: '3px solid #eab308', // Gold accent underline
    paddingBottom: '6px',
    marginBottom: '-10px', // Pull down over the gray border
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginBottom: '20px',
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px',
    marginBottom: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'flex-start', // Fix requested previously
    width: '100%',
  },
  label: {
    fontSize: '13px',
    color: '#475569',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  required: {
    color: '#ef4444',
  },
  input: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '12px 16px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '14px',
    backgroundColor: '#f8fafc', // Soft fill instead of white box
    color: '#0f172a',
    transition: 'all 0.2s ease',
    outline: 'none',
  },
  select: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '12px 16px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '14px',
    backgroundColor: '#f8fafc',
    color: '#0f172a',
    cursor: 'pointer',
    outline: 'none',
  },
  textarea: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '12px 16px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '14px',
    backgroundColor: '#f8fafc',
    color: '#0f172a',
    resize: 'vertical',
    outline: 'none',
  },
  fileInput: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '10px',
    border: '1px dashed #cbd5e1',
    borderRadius: '8px',
    fontSize: '13px',
    backgroundColor: '#f8fafc',
    color: '#64748b',
  },
  declarationSection: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    padding: '24px',
    backgroundColor: '#f0f9ff', // Light blue background for declaration
    borderLeft: '4px solid #0f2b5b', // Navy accent line
    borderRadius: '0 8px 8px 0',
    marginBottom: '32px',
  },
  checkbox: {
    marginTop: '3px',
    cursor: 'pointer',
    width: '18px',
    height: '18px',
    accentColor: '#0f2b5b',
  },
  declarationText: {
    fontSize: '14px',
    color: '#1e293b',
    lineHeight: '1.6',
    cursor: 'pointer',
  },
  submitWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
  submitBtn: {
    backgroundColor: '#0f2b5b', // Navy blue button
    color: '#ffffff',
    border: 'none',
    padding: '16px 56px',
    borderRadius: '30px', // Pill shape for modern look
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(15, 43, 91, 0.25)', // Colored shadow matching the button
    transition: 'transform 0.1s ease, box-shadow 0.2s ease',
  },
  errorText: {
    color: '#ef4444',
    fontSize: '14px',
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: '500',
    padding: '10px',
    backgroundColor: '#fef2f2',
    borderRadius: '6px',
  },
  successMessage: {
    textAlign: 'center',
    padding: '80px 40px',
  },
  successIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80px',
    height: '80px',
    backgroundColor: '#dcfce7',
    color: '#16a34a',
    borderRadius: '50%',
    fontSize: '40px',
    marginBottom: '24px',
  },
  successTitle: {
    color: '#16a34a',
    fontSize: '28px',
    marginBottom: '16px',
    fontWeight: '800',
  },
  successText: {
    color: '#64748b',
    fontSize: '16px',
    lineHeight: '1.6',
    maxWidth: '500px',
    margin: '0 auto',
  },
};

export default RegistrationPage;