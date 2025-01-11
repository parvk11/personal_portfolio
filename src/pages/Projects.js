import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Movie Recommender',
      description: [
        'Website to deliver personalized movie recommendations.',
        'Built with Python, FastAPI, React.',
        'Developed a machine learning model from scratch using collaborative filtering on the MovieLens dataset.',
        'Used Tensorflow to assist with gradient descent to train the model.',
        'Deployed the FastAPI app on AWS with elastic beanstalk for scalability.',
      ],
      skills: ['Python', 'FastAPI', 'React', 'AWS', 'Machine Learning'],
      link: 'https://movie-recommender-ten-blue.vercel.app/',
    },
    {
      name: 'Software Package Registry',
      description: [
        'Developed a package registry to manage, store, and distribute software packages.',
        'Implemented a RESTful API with features such as versioning, metrics, package debloating, and user authentication.',
        'Deployed on AWS Lambda and API Gateway for scalability and reliability.',
      ],
      skills: ['TypeScript', 'AWS', 'RESTful APIs', 'Node.js'],
      link: 'https://github.com/Team-18-ECE-461/Phase2-461',
    },
    {
      name: 'Heart Disease Neural Network',
      description: [
        'Manually crafted neural network to classify heart disease based on patient symptoms.',
        'Implemented backpropagation and gradient descent from scratch.',
        'Developed and trained from scratch to understand machine learning fundamentals.',
      ],
      skills: ['Python', 'NumPy', 'Neural Networks'],
      link: 'https://github.com/parvk11/Deep-Learning',
    },
    {
      name: 'Car Price Predictor',
      description: [
        'Analyzed features of cars to build a multi-linear regression model from scratch predicting reasonable prices for selling cars.',
        'Used Pandas for data preprocessing, implemented gradient descent for regression, and evaluated the model using cross validation.',
      ],
      skills: ['Python', 'Pandas', 'Regression'],
      link: '#',
    },
  ];

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>My Projects</h1>
      <div style={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <div style={styles.cardHeader}>
              <h3 style={styles.projectTitle}>{project.name}</h3>
            </div>
            <ul style={styles.projectDescription}>
              {project.description.map((line, idx) => (
                <li key={idx} style={styles.descriptionItem}>
                  {line}
                </li>
              ))}
            </ul>
            <div style={styles.skillsContainer}>
              {project.skills.map((skill, idx) => (
                <span key={idx} style={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: '50px 20px',
    textAlign: 'center',
    fontFamily: "'Roboto', sans-serif",
  },
  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#88bdbc',
    marginBottom: '50px',
  },
  projectGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
  },
  projectCard: {
    //backgroundColor: '#254e58',
    //borderRadius: '15px',
    padding: '30px',
    width: '800px',
    outline: '2px solid #88bdbc',
    //boxShadow: '0 6px 20px rgba(35, 38, 36, 0.15)',
    textAlign: 'left',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardHeader: {
    borderBottom: '2px solid #ddd',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  projectTitle: {
    fontSize: '24px',
    color: '#112d32',
    fontWeight: '700',
  },
  projectDescription: {
    paddingLeft: '20px',
    marginBottom: '20px',
    fontSize: '20px',
    color: '#112d32',
    lineHeight: '1.6',
  },
  descriptionItem: {
    marginBottom: '10px',
    listStyleType: 'disc',
    color: '#112d32',
  },
  skillsContainer: {
    marginBottom: '20px',
  },
  skill: {
    display: 'inline-block',
    //backgroundColor: '#f4f4f9',
    color: '#454A41',
    outline: '2px solid #88bdbc',
    borderRadius: '20px',
    padding: '10px 15px',
    margin: '5px 5px 0 0',
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  button: {
    display: 'block',
    textAlign: 'center',
    //backgroundColor: '#f4f4f9',
    outline: '2px solid #88bdbc',
    //maxWidth: '200px',  
    color: '#454A41',
    textDecoration: 'none',
    padding: '15px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Projects;
