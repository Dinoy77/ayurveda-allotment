import React, { useState, useEffect, useRef } from 'react';

const faqData = [
  {
    question: 'What courses do you offer?',
    answer: 'We offer UG Pharmacy (B.Pharm), PG Pharmacy (M.Pharm), Visit the Courses pages in the menu for full details on each.',
  },
  {
    question: 'How do I register?',
    answer: 'Click "Click Here for New Registration" on the homepage to fill the enquiry form. After that, you\'ll be shown the payment step to complete your application.',
  },
  {
    question: 'What is the eligibility criteria?',
    answer: 'Eligibility varies by course — generally Class 12 with at least 50% marks in Physics and Chemistry, plus Biology, Mathematics, or Computer Science. Check the specific course page for exact requirements.',
  },
  {
    question: 'How can I contact you?',
    answer: 'Visit the Contact Us page, or submit the registration form and our admissions team will reach out to you directly.',
  },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [hasOpened, setHasOpened] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [selected, isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setHasOpened(true);
  };

  const handleSelect = (item) => {
    setSelected(item);
  };

  const handleBack = () => {
    setSelected(null);
  };

  return (
    <div style={styles.container}>
      {isOpen && (
        <div style={styles.chatWindow} className="apci-chat-window">
          <div style={styles.header}>
            <div>
              <div style={styles.headerTitle}>APCI Assistant</div>
              <div style={styles.headerSubtitle}>Usually replies instantly</div>
            </div>
            <button style={styles.closeBtn} onClick={handleToggle} aria-label="Close chat">
              ✕
            </button>
          </div>
          <div style={styles.headerAccent} />

          <div style={styles.body} ref={bodyRef}>
            <div style={styles.botRow}>
              <div style={styles.avatar}>A</div>
              <div style={styles.botBubble}>
                Hi, I'm here to help. Pick a question below to get started.
              </div>
            </div>

            {!selected ? (
              <div style={styles.questionList}>
                {faqData.map((item, index) => (
                  <button
                    key={index}
                    style={styles.questionBtn}
                    onClick={() => handleSelect(item)}
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            ) : (
              <>
                <div style={styles.userRow}>
                  <div style={styles.userBubble}>{selected.question}</div>
                </div>
                <div style={styles.botRow}>
                  <div style={styles.avatar}>A</div>
                  <div style={styles.botBubble}>{selected.answer}</div>
                </div>
                <button style={styles.backBtn} onClick={handleBack}>
                  ← Ask another question
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <button
        style={{
          ...styles.toggleBtn,
          ...(!hasOpened ? styles.pulse : {}),
        }}
        onClick={handleToggle}
        aria-label="Open chat"
      >
        {isOpen ? (
          '✕'
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="8" width="16" height="12" rx="3" fill="#0f2b5b" />
            <rect x="9" y="2" width="2" height="5" rx="1" fill="#0f2b5b" />
            <circle cx="10" cy="3" r="1.5" fill="#0f2b5b" />
            <circle cx="8.5" cy="13.5" r="1.8" fill="#ffffff" />
            <circle cx="15.5" cy="13.5" r="1.8" fill="#ffffff" />
            <rect x="8" y="17.5" width="8" height="1.6" rx="0.8" fill="#ffffff" />
            <rect x="1.5" y="12" width="2" height="4" rx="1" fill="#0f2b5b" />
            <rect x="20.5" y="12" width="2" height="4" rx="1" fill="#0f2b5b" />
          </svg>
        )}
      </button>

      <style>{`
        @keyframes apciSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes apciPulse {
          0%, 100% { box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 0 0 0 rgba(234,179,8,0.5); }
          50% { box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 0 0 10px rgba(234,179,8,0); }
        }
        .apci-chat-window {
          animation: apciSlideUp 0.25s ease-out;
        }
      `}</style>
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
    width: '58px',
    height: '58px',
    borderRadius: '50%',
    backgroundColor: '#eab308',
    color: '#0f2b5b',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pulse: {
    animation: 'apciPulse 2s ease-out 1s 2',
  },
  chatWindow: {
    width: '340px',
    maxHeight: '460px',
    backgroundColor: '#ffffff',
    borderRadius: '14px',
    boxShadow: '0 12px 32px rgba(15,43,91,0.25)',
    marginBottom: '14px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#0f2b5b',
    color: '#ffffff',
    padding: '16px 18px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontWeight: '700',
    fontSize: '15px',
  },
  headerSubtitle: {
    fontSize: '12px',
    color: '#c7d2e8',
    marginTop: '2px',
  },
  headerAccent: {
    height: '3px',
    backgroundColor: '#eab308',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    fontSize: '15px',
    cursor: 'pointer',
    opacity: 0.85,
  },
  body: {
    padding: '18px',
    overflowY: 'auto',
    backgroundColor: '#f8fafc',
    flexGrow: 1,
  },
  botRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    marginBottom: '14px',
  },
  avatar: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: '#0f2b5b',
    color: '#eab308',
    fontSize: '13px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  botBubble: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '4px 14px 14px 14px',
    padding: '10px 14px',
    fontSize: '13.5px',
    color: '#1e293b',
    lineHeight: '1.5',
    maxWidth: '240px',
  },
  userRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '14px',
  },
  userBubble: {
    backgroundColor: '#0f2b5b',
    color: '#ffffff',
    borderRadius: '14px 4px 14px 14px',
    padding: '10px 14px',
    fontSize: '13.5px',
    lineHeight: '1.5',
    maxWidth: '240px',
  },
  questionList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  questionBtn: {
    textAlign: 'left',
    padding: '11px 14px',
    backgroundColor: '#ffffff',
    border: '1px solid #dbe3ee',
    borderRadius: '10px',
    fontSize: '13px',
    color: '#0f2b5b',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'border-color 0.15s ease',
  },
  backBtn: {
    background: 'none',
    border: 'none',
    color: '#169f48',
    fontSize: '13px',
    fontWeight: '700',
    cursor: 'pointer',
    padding: 0,
    marginTop: '4px',
  },
};

export default ChatBot;