import { useEffect } from 'react';
import Header  from './components/Header'; 
import Hero from './sections/hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import './index.css'; 
import './App.css';

function App() {
  // Add scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
          animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app-container" >

      <main>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>

  );

}

export default App;
