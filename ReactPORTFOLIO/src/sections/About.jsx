import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaLaptopCode, FaUsers, FaRocket, FaHandsHelping } from 'react-icons/fa';
import './about.css';

function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="about-section animate-on-scroll">
      <h2>About Me</h2>
      
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              I build tools that solve real problems, not just code that works, but solutions that people actually enjoy using.
            </p>
            
            <p>
              My approach to development comes from years of working directly with clients and users. Before diving into full-stack development, I spent time in client-facing and admin roles where I saw firsthand how the right tool can transform someone's workday. That's what drives me: creating applications that make a genuine difference.
            </p>
            
            <p>
              Right now, I'm focused on deepening my backend expertise with JavaScript (Node.js, Express, PostgreSQL) while taking on freelance projects. I love the freelance mindset : solving specific problems for real clients, learning fast, and delivering value from day one.
            </p>
            
            <p>
              I'm currently open to:
            </p>
            
            <ul className="open-to">
              <li>🚀 Freelance projects  from small business sites to custom web apps</li>
              <li>💼 Junior developer roles where I can contribute and grow</li>
              <li>🤝 Internships with teams that build meaningful products</li>
            </ul>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-card">
              <FaLaptopCode className="highlight-icon" />
              <h3>Current Focus</h3>
              <p>Backend JavaScript (Node.js, Express) & full-stack web apps</p>
            </div>
            
            <div className="highlight-card">
              <FaUsers className="highlight-icon" />
              <h3>Client-First Approach</h3>
              <p>Years of client-facing experience means I build what users actually need</p>
            </div>
            
            <div className="highlight-card">
              <FaRocket className="highlight-icon" />
              <h3>Freelance Ready</h3>
              <p>Available for small-to-medium web projects</p>
            </div>
            
            <div className="highlight-card">
              <FaHandsHelping className="highlight-icon" />
              <h3>Looking For</h3>
              <p>Junior dev roles & internships to grow with a team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;