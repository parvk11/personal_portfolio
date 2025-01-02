import React, { useState, useEffect } from 'react';
import image from '../image.png';

const HeroPage = () => {
  const styles = {
    hero: {
      display: 'flex', // Use flexbox for layout
      justifyContent: 'space-between', // Space between text and image
      alignItems: 'center', // Vertically center items
      padding: '50px', // Padding around the section
      //backgroundColor: '#f9f9f9',
      color: '#59892e',
      minHeight: '100vh', // Full screen height
      fontFamily: "'Arial', sans-serif",
    },
    textContainer: {
      maxWidth: '600px',
    //   backgroundColor: 'white',
        padding: '300px',
    },
    heroName: {
      fontSize: '40px',
      //padding: '20px',
      color: '#88bdbc',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    heroDescription: {
      fontSize: '24px',
      color: '#88bdbc',
      marginBottom: '30px',
      fontWeight: 'bold',
      height: '30px', // Fixed height to prevent layout shift
    },
    socialLinks: {
      display: 'flex',
      gap: '20px',
      marginTop: '20px',
    },
    socialIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      //boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
    },
    // image: {
    //   width: '600px', // Adjust the size of the image
    //   height: 'auto', // Maintain aspect ratio
    //   objectFit: 'contain',
    //   //filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))',
    //   marginRight: '200px',
    // },
  };

  const phrases = [
    'AI/ML Enthusiast.',
    'Software Engineer.',
    'Innovator.',
    'Creative Thinker.',
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      const fullText = phrases[currentPhraseIndex];
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1)); // Remove last character
      } else {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1)); // Add next character
      }

      // Switch between typing and deleting
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <section style={styles.hero}>
      {/* Left Content */}
      <div style={styles.textContainer}>
        {/* Name */}
        <div style={styles.heroName}> Parv Kumar </div>
        
        {/* Typing Effect Subtitle */}
        <div style={styles.heroDescription}>{currentText}</div>
        
        {/* Social Media Links */}
        <div style={styles.socialLinks}>
          <a href="https://github.com/parvk11" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              style={styles.socialIcon}
            />
          </a>
          <a href="https://www.linkedin.com/in/parvkumar" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              style={styles.socialIcon}
            />
          </a>
          <a href="https://www.instagram.com/parvk11" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              style={styles.socialIcon}
            />
          </a>
        </div>
      </div>

      {/* Right Image */}
      {/* <img
        src={image} // Replace with your image path
        alt="Coffee and Laptop"
        style={styles.image}
      /> */}
    </section>
  );
};

export default HeroPage;
