import { useScrollAnimation } from '../hooks/useScrollAnimation';
import historyPng from "../assets/images/history.png";
import mamaafrica from "../assets/images/mamaafricahome.png";
import flowdesk from "../assets/images/flowdeskDemo.mp4";
import Scrimba from "../assets/images/scrimbademo.mp4";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaCode } from 'react-icons/fa';
import './projects.css';





function Projects() {
  const ref = useScrollAnimation();

   const projects = [
    {
      title: "Currency Converter",
      description: "A simple, responsive currency converter that fetches real-time exchange rates and keeps conversion history.",
      image: historyPng,
      liveLink: "https://wanjirungari2.github.io/redian-intvw/",
      githubLink: "https://github.com/WanjiruNgari2/redian-intvw",
      tags: ["HTML", "CSS", "JavaScript", "API"],
      type: "image"
    },
    {
      title: "Flowdesk",
      description: "JavaScript tool to connect clients with their tasks. Tasks are automatically and manually assigned to clients.",
      video: flowdesk,
      liveLink: "https://flowdesk-9ebxh98cf-damaris-projects-68c92c9e.vercel.app/",
      githubLink: "https://github.com/WanjiruNgari2/flowdesk",
      tags: ["JavaScript", "Local Storage", "CRUD"],
      type: "video"
    },
    {
      title: "JavaScript Learning Projects",
      description: "Collection of projects from Scrimba and YouTube mentors including a blackjack game, color flipper, Chrome extension, and more.",
      video: Scrimba,
      githubLink: "https://github.com/WanjiruNgari2/JavaScript-with-Per-Scrimba",
      tags: ["JavaScript", "DOM", "Games", "Extensions"],
      type: "video",
      isLearning: true
    },
    {
      title: "Mama Africa",
      description: "Community health platform for African mothers. I built the admin dashboard for user management and content moderation.",
      image: mamaafrica,
      githubLink: "https://github.com/WanjiruNgari2/Mama-Africa---Maternity-Companion-for-African-Mums",
      tags: ["Team Project", "Admin Panel", "User Management"],
      type: "image"
    }
  ];

  return (
    <section id="projects" ref={ref} className="projects-section animate-on-scroll">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p className="projects-subtitle">Here are some things I've built — from school projects to personal experiments</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            style={{ '--delay': `${0.2 + index * 0.1}s` }}
          >
            <div className="project-media">
              {project.type === "image" ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="project-image"
                />
              ) : (
                <div className="video-container">
                  <video 
                    width="100%" 
                    controls
                    preload="metadata"
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser doesn't support video.
                  </video>
                  {project.isLearning && (
                    <span className="learning-badge">Learning Journey</span>
                  )}
                </div>
              )}
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <FaGithub /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <a 
          href="https://github.com/WanjiruNgari2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-profile-link"
        >
          <FaGithub /> See more on GitHub
        </a>
      </div>
    </section>
  );


}

export default Projects;