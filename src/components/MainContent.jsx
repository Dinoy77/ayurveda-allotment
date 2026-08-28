import React, { useState } from 'react';

const MainContent = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSending(true);

    try {
      const response = await fetch('/api/send-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Could not send your registration right now. Please try again in a moment.');
    } finally {
      setSending(false);
    }
  };

  return (
    <main style={styles.mainContent}>
      <h2 style={styles.sectionHeading}>INTRODUCTION</h2>
      <p style={styles.paragraph}>
        Association of Pharmacy Colleges of India (APCI) is an organisation dedicated to facilitating merit-based, affordable and accessible pharmacy education through B.Pharm and D.Pharm programmes across India. APCI aims to bridge the gap between eligible students and recognised pharmacy institutions with available seats, helping students secure admissions based on merit, eligibility, course and location preferences, and affordable fee structures. The Association also supports the effective utilisation of available pharmacy seats while providing students and parents with transparent information, counselling and admission assistance.
      </p>
      <button style={styles.primaryButton}>View More</button>

      <div style={styles.infoBanner}>
        <p style={styles.infoBannerText}>
          All candidates must complete their registration and choice-filling before the deadline. Please beware of unauthorized agents promising guaranteed seats. The seat allotment process is strictly merit-based, transparent, and fully computer-automated.
        </p>

        {/* Registration Button Area */}
        <div style={styles.registrationAction}>
          <button
            style={styles.registerButton}
            onClick={() => setShowModal(true)}
          >
            Click Here for New Registration
          </button>
        </div>
      </div>

      {/* Registration Form Modal */}
      {showModal && (
        <div
          style={styles.modalOverlay}
          onClick={() => {
            setShowModal(false);
            setSubmitted(false);
          }}
        >
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.modalClose}
              onClick={() => {
                setShowModal(false);
                setSubmitted(false);
              }}
            >
              ✕
            </button>
            {submitted ? (
              <div style={styles.successMessage}>
                <p>✅ Registration submitted successfully!</p>
              </div>
            ) : (
              <>
                <h2 style={styles.modalHeading}>New Registration</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                  <button type="submit" style={styles.submitButton} disabled={sending}>
                    {sending ? 'Submitting...' : 'Submit'}
                  </button>
                  {error && <p style={styles.errorText}>{error}</p>}
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

const styles = {
  mainContent: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    padding: '40px 32px',
  },
  sectionHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  paragraph: {
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.6',
    marginBottom: '24px',
    textAlign: 'justify',
  },
  primaryButton: {
    backgroundColor: '#eab308',
    color: '#000',
    fontWeight: '500',
    padding: '8px 24px',
    borderRadius: '4px',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '32px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  },
  infoBanner: {
    border: '1px solid #facc15',
    padding: '16px',
    textAlign: 'center',
    borderRadius: '4px',
    backgroundColor: '#fefce8',
  },
  infoBannerText: {
    color: '#ca8a04',
    fontWeight: '500',
    fontSize: '15px',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  registrationAction: {
    marginTop: '16px',
    textAlign: 'center',
  },
  registerButton: {
    display: 'inline-block',
    backgroundColor: '#169f48',
    color: '#ffffff',
    padding: '10px 24px',
    borderRadius: '4px',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '15px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    cursor: 'pointer',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: '32px',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '400px',
    position: 'relative',
  },
  modalClose: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  },
  modalHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#169f48',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  successMessage: {
    textAlign: 'center',
    color: '#169f48',
    fontSize: '16px',
    fontWeight: '600',
    padding: '20px 0',
  },
  errorText: {
    color: '#DC2626',
    fontSize: '13px',
    marginTop: '8px',
    textAlign: 'center',
  },
};

export default MainContent;