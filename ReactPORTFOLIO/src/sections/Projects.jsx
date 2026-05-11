import { useScrollAnimation } from '../hooks/useScrollAnimation';
import historyPng from "../assets/images/history.png";
import flowdesk from "../assets/images/flowdeskDemo.mp4";
import productScraperImg from "../assets/images/Screenshot(153).png";

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './projects.css';

function Projects() {
  const ref = useScrollAnimation();

  const projects = [
    {
      title: "Product Scraper",
      description: "A full-stack web scraping solution that extracts product data from Jumia. Features a REST API, automated scraping with Puppeteer, data persistence in Neon PostgreSQL, and a clean analytics dashboard with CSV export.",
      image: productScraperImg,
      liveLink: "https://jumia-scraper-dv1d.onrender.com",   // ← Confirmed from your screenshot
      githubLink: "https://github.com/WanjiruNgari2/product-scrapper",
      tags: ["Node.js", "Express", "Puppeteer", "PostgreSQL", "REST API", "Dashboard"],
      type: "image"
    },
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
      description: "A full project management application with backend API, relational database, and dynamic frontend for managing clients and tasks.",
      video: flowdesk,
      liveLink: "https://flowdesk-9ebxh98cf-damaris-projects-68c92c9e.vercel.app/",
      githubLink: "https://github.com/WanjiruNgari2/flowdesk",
      tags: ["Node.js", "Express", "PostgreSQL", "Fullstack"],
      type: "video"
    }
  ];

  return (
    <section id="projects" ref={ref} className="projects-section animate-on-scroll">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p className="projects-subtitle">Here are some of the real-world applications I've built</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${0.2 + index * 0.1}s` }}
          >
            <div className="project-media">
              {project.type === "image" && project.image ? (
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
