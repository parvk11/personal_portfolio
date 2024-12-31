import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";

// HeroPage Component (Left Side)
const HeroPage = () => {
  const styles = {
    hero: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: '50px 0px 50px 50px',
      //backgroundColor: '#f9f9f9',
      color: 'black',
      minHeight: '100vh',
      fontFamily: "'Arial', sans-serif",
      maxWidth: '600px',
      margin: '0',
    },
    heroName: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '10px',
      alignItems: 'left'
    },
    heroDescription: {
      fontSize: '28px',
      color: 'black',
      marginBottom: '30px',
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
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
    },
  };

  const phrases = [
    'Web Developer',
    'Tech Enthusiast',
    'Problem Solver',
    'Innovator',
    'Creative Thinker',
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
    </section>
  );
};
// About Component (Right Side)
const About = () => {
  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "50px",
      gap: "30px",
      maxWidth: "600px",
    },
    imageContainer: {
      textAlign: "center",
    },
    image: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
    },
    textContainer: {
      textAlign: "left",
      maxWidth: "500px",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "15px",
    },
    paragraph: {
      fontSize: "1.1rem",
      marginBottom: "15px",
    },
  };

  return (
    <div style={styles.wrapper} id="about">
      <div style={styles.imageContainer}>
        <img
          src="https://media.licdn.com/dms/image/v2/C4E03AQEZEVMA7HUUuA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1627442991556?e=2147483647&v=beta&t=yAQbg5pWH9_f8fuFicTUlbRv5ELq2EJchMhUGDTWToM"
          alt="Parv Kumar"
          style={styles.image}
        />
      </div>
      <motion.div
        style={styles.textContainer}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={styles.title}>Hi, I’m Parv Kumar 👋</h1>
        <p style={styles.paragraph}>
          I am a <strong>Computer Engineering student</strong> at Purdue
          University (GPA: 3.96/4.00), driven by a passion for software
          engineering, AI, and creating impactful solutions.
        </p>
        <p style={styles.paragraph}>
          With experience in <strong>generative AI</strong>, neural networks,
          and scalable system design, I’ve worked on projects like chatbots,
          music transcription systems, and data-driven applications. Beyond
          development, I’ve guided over 100 students as an engineering peer
          teacher, fostering collaboration and innovation.
        </p>
        <p style={styles.paragraph}>
          I thrive on solving complex problems, learning new technologies, and
          collaborating with diverse teams to make a tangible impact in the
          world.
        </p>
      </motion.div>
    </div>
  );
};

// CombinedPage with Side-by-Side Layout
const CombinedPage = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "50px",
  };

  return (
    <div style={containerStyle}>
      <HeroPage />
      <About />
    </div>
  );
};

export default CombinedPage;
