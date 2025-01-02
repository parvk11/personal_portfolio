import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Generative AI Intern",
      company: "Deltek",
      duration: "June 2024 – Aug 2024",
      location: "Herndon, VA",
      description: [
        "Developed and deployed a chatbot using Retrieval Augmented Generation (RAG).",
        "Integrated token-based REST APIs to streamline customer interactions.",
        "Conducted model evaluation and data processing to develop receipt recognition with AI, saving over 50% in logistics expenses.",
      ],
    },
    {
      title: "Undergraduate Research Assistant",
      company: "Purdue University",
      duration: "Aug 2024 – Dec 2024",
      location: "West Lafayette, IN",
      description: [
        "Implemented models for audio-to-sheet music transcription using deep neural networks and Transformers.",
        "Collaborated and designed a framework to gather existing music transcription solutions from over 100 participants.",
      ],
    },
    {
      title: "Engineering Peer Teacher",
      company: "Purdue University",
      duration: "Jan 2024 – Jun 2024",
      location: "West Lafayette, IN",
      description: [
        "Guided over 100 students in MATLAB programming and collaborative engineering projects.",
        "Facilitated workshops to teach coding best practices and problem-solving techniques.",
        "Mentored first-year students, fostering teamwork and innovation.",
      ],
    },
  ];

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Experience</h1>
      <div style={styles.experienceGrid}>
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            style={styles.experienceCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 style={styles.jobTitle}>
              {experience.title} @ <span style={styles.company}>{experience.company}</span>
            </h3>
            <p style={styles.duration}>
              {experience.duration} | {experience.location}
            </p>
            <ul style={styles.description}>
              {experience.description.map((line, idx) => (
                <li key={idx} style={styles.descriptionItem}>
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "50px 20px",
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif",
    //backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#88bdbc",
    marginBottom: "50px",
  },
  experienceGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
  },
  experienceCard: {
    //backgroundColor: "#254e58",
    //borderRadius: "15px",
    padding: "30px",
    width: "800px",
    outline: "2px solid #88bdbc",
    //boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
    textAlign: "left",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  jobTitle: {
    fontSize: "24px",
    color: "#112d32",
    fontWeight: "700",
  },
  company: {
    fontSize: "24px",
    color: "#88bdbc",
    fontWeight: "600",
  },
  duration: {
    fontSize: "16px",
    color: "#112d32",
    marginBottom: "20px",
  },
  description: {
    paddingLeft: "20px",
    fontSize: "16px",
    color: "#112d32",
    lineHeight: "1.6",
  },
  descriptionItem: {
    marginBottom: "23px",
    listStyleType: "disc",
    color: "#112d32",
  },
};

export default Experience;
