// // import React from 'react';
// // import { Routes, Route, Link } from 'react-router-dom';
//  import Home from './pages/Home';
//  import About from './pages/About';
// // import Projects from './pages/Projects';
//  import Contact from './pages/Contact';
//  import { motion } from 'framer-motion';

// // const App = () => {
// //   return (
// //     <div>
// //       <nav style={styles.nav}>
// //         <Link to="/" style={styles.link}>Home</Link>
// //         <Link to="/about" style={styles.link}>About</Link>
// //         <Link to="/projects" style={styles.link}>Projects</Link>
// //         <Link to="/contact" style={styles.link}>Contact</Link>
// //       </nav>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/projects" element={<Projects />} />
// //         <Route path="/contact" element={<Contact />} />
// //       </Routes>
// //     </div>
// //   );
// // };

// // const styles = {
// //   nav: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     padding: '10px',
// //     backgroundColor: '#282c34',
// //   },
// //   link: {
// //     margin: '0 15px',
// //     textDecoration: 'none',
// //     color: 'white',
// //     fontWeight: 'bold',
// //   },
// // };

// // export default App;
// import React, { useRef } from 'react';

// const Projects = () => {
//   const projects = [
//     {
//       name: 'Movie Recommender',
//       description: 'Website to deliver personalized movie recommendations.',
//       link: 'https://github.com/parvk11/Movie-recommender',
//     },
//     {
//       name: 'Heart Disease Neural Network',
//       description:
//         'Manually crafted neural network used to classify the presence of heart disease in patients based on symptoms. Developed and trained from scratch to understand machine learning fundamentals.',
//       link: 'https://github.com/parvk11/Deep-Learning',
//     },
//     {
//       name: 'Software Package Registry',
//       description:
//         'Developed a software package registry to manage, store, and distribute software packages. Implemented a RESTful API to interact with the registry. Included features such as package versioning, package debloating, package metrics, dependency management, and user authentication.',
//       link: 'https://github.com/Team-18-ECE-461/Phase2-461',
//     },
//   ];

//   return (
//     <div style={styles.projectsContainer}>
//       <h1>My Projects</h1>
//       <ul style={styles.projectsList}>
//         {projects.map((project, index) => (
//           <li key={index} style={styles.projectItem}>
//             <h3>{project.name}</h3>
//             <p>{project.description}</p>
//             <a href={project.link} target="_blank" rel="noopener noreferrer">
//               View Project
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


// const App = () => {
//   // Refs to sections
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const projectsRef = useRef(null);
//   const contactRef = useRef(null);

//   // Scroll to a specific section
//   const scrollToSection = (ref) => {
//     ref.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div>
//       {/* Navigation Bar */}
//       <nav style={styles.nav}>
//         <button style={styles.link} onClick={() => scrollToSection(homeRef)}>Home</button>
//         <button style={styles.link} onClick={() => scrollToSection(aboutRef)}>About</button>
//         <button style={styles.link} onClick={() => scrollToSection(projectsRef)}>Projects</button>
//         <button style={styles.link} onClick={() => scrollToSection(contactRef)}>Contact</button>
//       </nav>

//       {/* Hero Section */}
//       <div id="hero" style={styles.hero}>
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           style={styles.heroText}
//         >
//           Hi, I'm Parv Kumar
//         </motion.h1>
//         <p style={styles.heroSubtitle}>
//           A Computer Engineer passionate about AI and software engineering.
//         </p>
//       </div>
//       {/* Content Sections */}
//       <div ref={homeRef} style={styles.section}>
//         <Home />
//       </div>

//       <div ref={aboutRef} style={styles.section}>
//         <About />
//       </div>

//       <div ref={projectsRef} style={styles.section}>
//         <Projects />
//       </div>

//       <div ref={contactRef} style={styles.section}>
//         <Contact />
//       </div>
//     </div>
//   );
// };

// /*const styles = {
//   nav: {
//     position: 'fixed',
//     top: 0,
//     width: '100%',
//     backgroundColor: '#282c34',
//     padding: '10px',
//     display: 'flex',
//     justifyContent: 'center',
//     zIndex: 1000,
//   },
//   link: {
//     margin: '0 15px',
//     textDecoration: 'none',
//     background: 'none',
//     border: 'none',
//     color: 'white',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     fontSize: '16px',
//   },
//   section: {
//     height: '100vh',
//     padding: '20px',
//     textAlign: 'center',
//   },
//   projectsContainer: {
//     textAlign: 'left',
//     margin: '0 auto',
//     maxWidth: '800px',
//   },
//   projectsList: {
//     listStyleType: 'none',
//     padding: 0,
//   },
//   projectItem: {
//     marginBottom: '20px',
//   },
// };*/
// const styles = {
//   nav: {
//     position: 'fixed',
//     top: 0,
//     width: '100%',
//     backgroundColor: 'darkblue',
//     padding: '10px',
//     display: 'flex',
//     justifyContent: 'center',
//     zIndex: 1000,
//     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
//   },
//   link: {
//     margin: '0 15px',
//     textDecoration: 'none',
//     background: 'none',
//     border: 'none',
//     color: 'white',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     fontSize: '16px',
//     padding: '10px 15px',
//     borderRadius: '5px',
//     transition: 'background 0.3s',
//   },
//   section: {
//     padding: '60px 20px',
//     marginTop: '60px',
//   },
//   projectsContainer: {
//     margin: '0 auto',
//     maxWidth: '800px',
//     backgroundColor: 'white',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     padding: '20px',
//     borderRadius: '8px',
//   },
//   projectItem: {
//     marginBottom: '20px',
//     padding: '10px',
//     borderBottom: '1px solid #ddd',
//   },
// };


// export default App;

import React, { useRef } from "react";
import { color, motion } from "framer-motion";
import { Link } from "react-scroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Combined from "./pages/Combined";
import Experience from "./pages/Experience";
import "./App.css";


// const Projects = () => {
//   const projects = [
//     {
//       name: "Movie Recommender",
//       description:
//         "Website to deliver personalized movie recommendations.",
//       link: "https://github.com/parvk11/Movie-recommender",
//     },
//     {
//       name: "Heart Disease Neural Network",
//       description:
//         "Manually crafted neural network to classify heart disease presence based on symptoms.",
//       link: "https://github.com/parvk11/Deep-Learning",
//     },
//     {
//       name: "Software Package Registry",
//       description:
//         "Developed a software package registry to manage, store, and distribute packages.",
//       link: "https://github.com/Team-18-ECE-461/Phase2-461",
//     },
//   ];

//   return (
//     <div style={styles.projectsContainer}>
//       <h2 style={styles.sectionTitle}>My Projects</h2>
//       <ul style={styles.projectsList}>
//         {projects.map((project, index) => (
//           <li key={index} style={styles.projectItem}>
//             <h3>{project.name}</h3>
//             <p>{project.description}</p>
//             <a href={project.link} target="_blank" rel="noopener noreferrer">
//               View Project
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

import { useState} from 'react';
const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const [hovered, setHovered] = useState(null); 

  return (
    <div>
      {/* Sidebar */}
      <nav style={styles.sidebar}>
        <Link to="hero" smooth={true}  style={{...styles.link, ...(hovered === 'home' && styles.linkHover)}}
          onMouseEnter={() => setHovered('home')} // Set hovered to 'home'
          onMouseLeave={() => setHovered(null)} // Reset on mouse leave>
          >
          Home
        </Link>
        <Link 
          to="about" 
          smooth={true} 
          style={{...styles.link, ...(hovered === 'about' && styles.linkHover)}}
          onMouseEnter={() => setHovered('about')}
          onMouseLeave={() => setHovered(null)}
        >
          About
        </Link>
        <Link 
          to="experience" 
          smooth={true} 
          style={{...styles.link, ...(hovered === 'experience' && styles.linkHover)}}
          onMouseEnter={() => setHovered('experience')}
          onMouseLeave={() => setHovered(null)}
        >
          Experience
        </Link>
        <Link 
          to="projects" 
          smooth={true} 
          style={{...styles.link, ...(hovered === 'projects' && styles.linkHover)}}
          onMouseEnter={() => setHovered('projects')}
          onMouseLeave={() => setHovered(null)}
        >
          Projects
        </Link>
        <Link 
          to="contact" 
          smooth={true} 
          style={{...styles.link, ...(hovered === 'contact' && styles.linkHover)}}
          onMouseEnter={() => setHovered('contact')}
          onMouseLeave={() => setHovered(null)}
        >
          Contact
        </Link>
      </nav>
      
      {/* Hero Section */}
      <div id="hero" ref = {homeRef} style={styles.hero}>
        <Home />
      </div>

      {/* Content Sections */}
      <div id="about" ref={aboutRef} style={styles.section}>
        <About />
      </div>

      <div id = "experience" ref = {experienceRef} style = {styles.section}>
        <Experience />
      </div>

      <div id="projects" ref={projectsRef} style={styles.section}>
        <Projects />
      </div>


      <div id="contact" ref={contactRef} style={styles.section}>
        <Contact />
      </div>
    </div>
  );
};

// Styles
/*const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "darkblue",
    padding: "15px 0",
    display: "flex",
    justifyContent: "center",
    zIndex: 1000,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  },
  link: {
    margin: "0 15px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px",
    padding: "10px 15px",
    transition: "background 0.3s, color 0.3s",
  },
  hero: {
    height: "100vh",
    backgroundColor: "#061658",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    padding: "20px",
  },
  heroText: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    marginTop: "10px",
  },
  section: {
    padding: "80px 20px",
    textAlign: "center",
  },
  projectsContainer: {
    margin: "0 auto",
    maxWidth: "800px",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    borderRadius: "8px",
  },
  projectsList: {
    listStyleType: "none",
    padding: 0,
  },
  projectItem: {
    marginBottom: "20px",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "20px",
    fontWeight: "bold",
  },
};*/

const styles = {
  appContainer: {
    display: "flex",
    minHeight: "100vh",
  },
  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100px",
    height: "100vh",
    backgroundColor: "#254e58",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
    zIndex: 1000,
    //boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
  },
  link: {
    margin: "0 15px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px",
    padding: "20px 15px",
    transition: "color 0.3s, border-bottom 0.3s", // Added transition for smooth effect
    position: "relative", // Ensure the pseudo-element is positioned correctly
  },
  linkHover: {
    borderBottom: "5px solid #88bdbc", // Underline color and thickness
  },
  mainContent: {
    marginLeft: "200px",
    width: "100%",
  },
  // hero: {
  //   height: "100vh",
  //   //backgroundColor: "#091546",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   color: "black",
  //   textAlign: "center",
  //   padding: "20px",
  // },
  // heroText: {
  //   fontSize: "4rem",
  //   fontWeight: "bold",
  //   marginBottom: "10px",
  // },
  // heroSubtitle: {
  //   fontSize: "1.8rem",
  //   marginTop: "10px",
  // },
  // hero: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'flex-start',
  //   padding: '50px 0px 50px 200px',
  //   backgroundColor: '#f9f9f9', // Slightly off-white background
  //   color: 'black', // Green highlight for text
  //   minHeight: '10vh',
  // },
  // heroText: {
  //   fontSize: '96px',
  //   fontWeight: 'bold',
  //   marginBottom: '30px',
  // },
  // heroDescription: {
  //   fontSize: '18px',
  //   color: '#555', // Neutral contrast text
  //   marginBottom: '30px',
  // },
  // heroImages: {
  //   display: 'flex',
  //   gap: '20px',
  //   flexWrap: 'wrap',
  // },
  // heroImage: {
  //   width: '150px',
  //   height: '150px',
  //   objectFit: 'cover',
  //   borderRadius: '10px',
  //   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  //   transition: 'transform 0.3s',
  // },
  // heroImageHover: {
  //   transform: 'scale(1.05)', // Subtle zoom effect
  // },
  section: {
    padding: "80px 20px",
    textAlign: "center",
  },
  projectsContainer: {
    margin: "0 auto",
    maxWidth: "800px",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    borderRadius: "8px",
  },
  projectsList: {
    listStyleType: "none",
    padding: 0,
  },
  projectItem: {
    marginBottom: "20px",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "20px",
    fontWeight: "bold",
  },
};



export default App;

