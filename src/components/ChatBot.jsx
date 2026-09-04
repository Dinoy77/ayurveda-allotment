import React, { useState } from 'react';

const faqData = [
  {
    question: 'What courses do you offer?',
    answer: 'We offer UG Pharmacy (B.Pharm), PG Pharmacy (M.Pharm), and Ayurveda courses. Visit our Courses page for full details.',
  },
  {
    question: 'How do I register?',
    answer: 'Click the "Click Here for New Registration" button on our homepage to fill out the enquiry form. Our team will get in touch with you.',
  },
  {
    question: 'What is the eligibility criteria?',
    answer: 'Eligibility varies by course. Please visit the specific course page or contact us for detailed eligibility requirements.',
  },
  {
    question: 'How can I contact you?',
    answer: 'You can reach us through the Contact Us page, or share your details via our registration form and our team will call you back.',
  },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleQuestionClick = (item) => {
    setSelectedAnswer(item);
  };

  const handleBack = () => {
    setSelectedAnswer(null);
  };

  return (
    <div style={styles.container}>
      {isOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.header}>
            <span>Ask us anything</span>
            <button style={styles.closeBtn} onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>

          <div style={styles.body}>
            {!selectedAnswer ? (
              <>
                <p style={styles.greeting}>👋 Hi! How can we help you today?</p>
                {faqData.map((item, index) => (
                  <button
                    key={index}
                    style={styles.questionBtn}
                    onClick={() => handleQuestionClick(item)}
                  >
                    {item.question}
                  </button>
                ))}
              </>
            ) : (
              <>
                <p style={styles.answerQuestion}>{selectedAnswer.question}</p>
                <p style={styles.answerText}>{selectedAnswer.answer}</p>
                <button style={styles.backBtn} onClick={handleBack}>
                  ← Back to questions
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <button style={styles.toggleBtn} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '💬'}
      </button>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 2000,
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  toggleBtn: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '#169f48',
    color: '#ffffff',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },
  chatWindow: {
    width: '320px',
    maxHeight: '420px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    marginBottom: '12px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#0f2b5b',
    color: '#ffffff',
    padding: '14px 16px',
    fontWeight: '600',
    fontSize: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    fontSize: '16px',
    cursor: 'pointer',
  },
  body: {
    padding: '16px',
    overflowY: 'auto',
  },
  greeting: {
    fontSize: '14px',
    color: '#374151',
    marginBottom: '12px',
  },
  questionBtn: {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    padding: '10px 12px',
    marginBottom: '8px',
    backgroundColor: '#f3f4f6',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '13px',
    color: '#111827',
    cursor: 'pointer',
  },
  answerQuestion: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#0f2b5b',
    marginBottom: '8px',
  },
  answerText: {
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.6',
    marginBottom: '16px',
  },
  backBtn: {
    background: 'none',
    border: 'none',
    color: '#169f48',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    padding: 0,
  },
};

export default ChatBot;