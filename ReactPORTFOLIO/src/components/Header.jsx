import React, { useState, useEffect } from 'react';
import './navbar.css';

// Fix: Import resume correctly (if in public folder, use direct path, not import)
// Option 1: If resume is in public folder
// const resumePath = '/cv.pdf';

// Option 2: If resume is in src/assets/files/
import resumePath from '../assets/files/fullCv.pdf';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle hamburger menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close menu when a link is clicked
    const handleLinkClick = (e) => {
        setIsOpen(false);
        
        // Smooth scroll to section
        const href = e.currentTarget.getAttribute('href');
        if (href && href !== '#') {
            const element = document.querySelector(href);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    };

    // Close menu when clicking outside 
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.nav-container')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    // Prevent body scroll when menu is open on mobile
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="nav-container">
                {/* Logo/Name instead of resume button */}
                <div className="logo">
                    <a href="#home" onClick={handleLinkClick}></a>
                </div>

                {/* Hamburger Icon - FIXED: Added the spans */}
                <div
                    className={`hamburger ${isOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Navigation Links - FIXED: Correct case for IDs */}
                <nav className={isOpen ? 'show' : ''}>
                    <a href="#hero" onClick={handleLinkClick}>Home</a>
                    <a href="#about" onClick={handleLinkClick}>About</a>
                    <a href="#projects" onClick={handleLinkClick}>Projects</a>
                    <a href="#skills" onClick={handleLinkClick}>Skills</a>
                    <a href="#contact" onClick={handleLinkClick}>Contact</a>
                </nav>

                {/* Resume Button - Moved outside nav for desktop */}
                <div className="resume-container">
                    <a 
                        href={resumePath}
                        download="Damaris_Ngari_Resume.pdf"
                        type="application/pdf"
                        className="resume-button"
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="download-icon">📄</span>
                        <span className="download-text">Resume</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
