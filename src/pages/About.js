import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div style={styles.wrapper}>
      {/* Header Section */}
      <h1 style={styles.headerTitle}>About Me</h1>

      {/* Container Section */}
      <div style={styles.container}>
        {/* Left Column: Profile Picture */}
        <div style={styles.imageContainer}>
          <img
            src="https://media.licdn.com/dms/image/v2/C4E03AQEZEVMA7HUUuA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1627442991556?e=2147483647&v=beta&t=yAQbg5pWH9_f8fuFicTUlbRv5ELq2EJchMhUGDTWToM"
            alt="Parv Kumar"
            style={styles.image}
          />
        </div>

        {/* Right Column: About Me Text */}
        <motion.div
          style={styles.textContainer}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
         <p style={styles.paragraph}>
          👋 Hi, I’m <strong>Parv Kumar</strong> — a Computer Engineering student at Purdue University (GPA: 3.97/4.00) 
          interested in how AI/ML, software engineering, and systems come together to solve real problems.
        </p>

        <p style={styles.paragraph}>
          I’ve worked on projects that range from <strong>LLM-based agent systems</strong> and scalable APIs to <strong>embedded software</strong> and signal processing on microcontrollers. Most recently, I interned at <strong>Lockheed Martin</strong>, optimizing Python scripts and C++ simulations for defense systems, and at <strong>Deltek</strong>, where I built a generative AI chatbot using transformer models and RAG.
        </p>

        <p style={styles.paragraph}>
          At Purdue, I lead research on <strong>multi-agent LLM communication</strong> and build tools that make collaboration and discoverability between AI agents more efficient. I’ve also served as a <strong>peer teacher</strong> for other engineers in classes like Software Engineering, Data Structures and Algorithms, and Engineering, helping students learn to code and design together.
        </p>

        <p style={styles.paragraph}>
          I enjoy learning new technologies, experimenting with creative system designs, and building things that make a real difference, whether that’s in AI, embedded systems, or cloud software.
        </p>

        </motion.div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    //minHeight: "100vh",
    display: "flex",
    flexDirection: "column", // Stack header and container vertically
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "20px",
    //backgroundColor: "#f5f5f5",
  },

  headerTitle: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#88bdbc",
    marginBottom: "30px",
    textAlign: "center",
  },

  container: {
    display: "flex",
    flexDirection: "row", // Align picture and text side by side
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "30px",
    maxWidth: "1100px",
    padding: "20px",
    outline: "2px solid #88bdbc",
    //backgroundColor: "#88bdbc",
    //borderRadius: "20px",
    boxShadow: "30px 30px 50px rgba(0.2, 0.2, 0.2, 0.2)",
  },

  imageContainer: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },

  textContainer: {
    flex: "2",
    textAlign: "left",
  },

  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    marginBottom: "20px",
    color: "black",
    fontFamily: "'Roboto', sans-serif",
  },
};

export default About;
