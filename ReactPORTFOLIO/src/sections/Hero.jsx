import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope, FaCode, FaLaptopCode } from 'react-icons/fa';
import dama from "../assets/images/damaProfile.jpg";
import './hero.css';

function Hero() {
    const ref = useScrollAnimation();

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" ref={ref} className='hero-section animate-on-scroll'>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="hero-greeting">👋 Hello, I'm</span>
                        <h1 className="hero-name">Damaris Ngari</h1>
                        <h2 className="hero-title">
                            <span className="title-highlight">Full-Stack Developer</span> 
                            <span className="title-focus"> & Problem Solver</span>
                        </h2>
                        
                        <p className="hero-description">
                            I build web applications that actually help people. With a background in 
                            <span className="highlight-text"> client-facing roles</span>, I know that great code is about 
                            solving real problems, not just writing functions.
                        </p>
                        
                        <div className="hero-current-focus">
                            <FaLaptopCode className="focus-icon" />
                            <span>Currently diving deep into </span>
                            <strong>Backend JavaScript (Node.js, Express, PostgreSQL)</strong>
                        </div>
                        
                        <div className="hero-cta">
                            <button onClick={scrollToProjects} className="cta-primary">
                                View My Work
                            </button>
                            <a href="#contact" className="cta-secondary">
                                Let's Talk
                            </a>
                        </div>
                        
                        <div className="hero-social">
                            <a href="https://github.com/WanjiruNgari2" target="_blank" rel="noopener noreferrer" 
                               className="social-link" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/damaris-ngari-6b1870199/" target="_blank" rel="noopener noreferrer" 
                               className="social-link" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="mailto:wanjirungari2@gmail.com" className="social-link" aria-label="Email">
                                <FaEnvelope />
                            </a>
                            <a href="#projects" className="social-link projects-link" onClick={scrollToProjects}>
                                <FaCode />
                            </a>
                        </div>
                    </div>
                    
                    <div className="hero-image-wrapper">
                        <div className="hero-image-container">
                            <img 
                                src={dama} 
                                alt="Damaris Ngari - Full Stack Developer" 
                                className="hero-image"
                            />
                            <div className="hero-image-border"></div>
                        </div>
                        
                        <div className="hero-status-card">
                            <div className="status-dot"></div>
                            <span>Available for freelance & junior dev roles</span>
                        </div>
                    </div>
                </div>
                
                <div className="hero-scroll-indicator" onClick={scrollToProjects}>
                    <span>Scroll to explore</span>
                    <FaArrowDown className="scroll-arrow" />
                </div>
            </div>
        </section>
    );
}

export default Hero;