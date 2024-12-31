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
            👨‍💻 I'm a <strong>Computer Engineer</strong> passionate about software
            development, AI, and scalable system design.
          </p>
          <p style={styles.paragraph}>
            🎓 Currently pursuing my degree at <strong>Purdue University</strong> (GPA: 3.96/4.00), I enjoy solving
            real-world problems and building impactful solutions.
          </p>
          <p style={styles.paragraph}>
            🛠 From building chatbots with <strong>generative AI</strong> to
            designing cloud-based systems, I’ve developed projects that improve
            efficiency and save resources.
          </p>
          <p style={styles.paragraph}>
            🔧 With a strong foundation in <strong>Python, TypeScript, AWS</strong>, and scalable API design, I’ve led
            projects that streamline workflows and deliver meaningful results.
          </p>
          <p style={styles.paragraph}>
            📈 I thrive on turning complex challenges into opportunities for growth
            and innovation.
          </p>
          <p style={styles.paragraph}>
            💡 Curious and always learning, I’m committed to advancing my skills
            and collaborating with others to make a positive impact.
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
    color: "white",
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
    backgroundColor: "#254e58",
    borderRadius: "20px",
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
    color: "white",
    fontFamily: "'Roboto', sans-serif",
  },
};

export default About;
