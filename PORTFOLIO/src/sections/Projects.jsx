import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Projects() {
  const ref = useScrollAnimation();


  return (
    <section id="projects" ref={ref} className="animate-on-scroll" >
      <h2>Projects</h2>
      <p style={{ '--delay': '0.2s' }} >Here are a few things I've worked on (mostly school + personal learning):</p>
      <div className="project-grid"  style={{ '--delay': '0.2s' }}>
        <a href="https://github.com/WanjiruNgari2/JavaScript-with-Per-Scrimba" target="_blank" className="project-card">
          <div className="content">
            JavaScript Learning
            <video width="100%" controls>
              <source src="/images/scrimbademo.mp4" type="video/mp4" loading="lazy" />
              live demo
            </video>

            <h3></h3>
            <p >This github links contains lots of follow along projects from Scrimba and youtube mentors.   </p>
            <p>Projects inludes a people counting app, color flipper, blackjack game, chrome extensions among others.</p>
          </div>
        </a>


        <a href="https://flowdesk-9ebxh98cf-damaris-projects-68c92c9e.vercel.app/" target="_blank" className="project-card">
          <div className="content">
            <video width="100%" controls>
              <source src="/images/flowdeskDemo.mp4" type="video/mp4" loading="lazy" />
              loading Demo
            </video>
            <h3>Flowdesk</h3>
            <p> JavaScript tool to connect clients and their tasks.Tasks are automatically and manually added to clients</p>
          </div>
        </a>




        <a href="https://github.com/WanjiruNgari2/Mama-Africa---Maternity-Companion-for-African-Mums" target="_blank"
          className="project-card">
          <div className="content">
            <img src="/images/mamaafricahome.png" alt="Mama Africa screenshot" loading="lazy" />
            <h3>Mama Africa</h3>
            <p>Team project at Moringa — community health platform for mothers.</p>
            <p>I worked on the admin user, who added and regulated other users, filtered content from users and ensured overall smooth interactions.</p>
          </div>
        </a>

      </div>
    </section>

  );
}

export default Projects;