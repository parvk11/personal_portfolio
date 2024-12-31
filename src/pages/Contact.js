import React from 'react';

const Contact = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <h1 style={styles.title}>Contact Me</h1>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          {/* Phone Button */}
          <a href="tel:2672184136" style={styles.button}>
            📞 Call Me : 267-218-4136
          </a>

          {/* Email Button */}
          <a href="mailto:kparv01@gmail.com" style={styles.button}>
            📧 Email Me
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '20px',
    //backgroundColor: '#f9f9f9',
  },
  container: {
    //backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    //boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '300px',
  },
  title: {
    marginBottom: '20px',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  button: {
    display: 'inline-block',
    padding: '15px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#254e58',
    borderRadius: '4px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Contact;
