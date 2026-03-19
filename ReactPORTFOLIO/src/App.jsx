import Header  from './components/Header'; 
import Hero from './sections/hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import './index.css'; 

function App() {
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
