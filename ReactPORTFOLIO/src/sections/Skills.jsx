import { useScrollAnimation } from '../hooks/useScrollAnimation';
import  './skills.css';


function Skills() {
    const ref = useScrollAnimation();


    return (
        <section id="skills" ref={ref} className="animate-on-scroll">
            <div>
                <h2>Skills</h2>
            </div>
            
            <div className="skills-grid" style={{ '--delay': '0.2s' }}>


                <div className="skill-ring" style={{ '--progress': '100%', '--delay': '0.1s' }}>
                    <div className="ring">
                        <span>HTML5</span>
                    </div>
                    <p>100%</p>
                </div>

                <div className="skill-ring" style={{ '--progress': '100%', '--delay': '0.2s' }}>
                    <div className="ring">
                        <span>CSS3</span>
                    </div>
                    <p>100%</p>
                </div>

                <div className="skill-ring" style={{ '--progress': '80%', '--delay': '0.3s' }}>
                    <div className="ring">
                        <span>JavaScript</span>
                    </div>
                    <p>80%</p>
                </div>

                <div className="skill-ring" style={{ '--progress': '75%', '--delay': '0.4s' }}>
                    <div className="ring">
                        <span>Python</span>
                    </div>
                    <p>75%</p>
                </div>

                <div className="skill-ring" style={{ '--progress': '100%', '--delay': '0.5s' }}>
                    <div className="ring">
                        <span>Git & GitHub</span>
                    </div>
                    <p>100%</p>
                </div>

                <div className="skill-ring" style={{ '--progress': '85%', '--delay': '0.6s' }}>
                    <div className="ring">
                        <span>Flask</span>
                    </div>
                    <p>85%</p>
                </div>


                <div className="skill-ring" style={{ '--progress': '95%', '--delay': '0.8s' }}>
                    <div className="ring">
                        <span>RestAPIs</span>
                    </div>
                    <p>95%</p>
                </div>

                <div className="skill-ring" style={{ '--progress': '100%', '--delay': '0.9s' }}>
                    <div className="ring">
                        <span>SQL Basics</span>
                    </div>
                    <p>100%</p>
                </div>

                <div className="skill-ring" style={{ '--progress': '95%', '--delay': '1.0s' }}>
                    <div className="ring">
                        <span>PostgreSQL</span>
                    </div>
                    <p>95%</p>
                </div>

                <div className="skill-ring" style={{ '--progress': '75%', '--delay': '1.1s' }}>
                    <div className="ring">
                        <span>Debugging DevTools</span>
                    </div>
                    <p>75%</p>
                </div>

                <div className="skill-ring" style={{ '--progress': '100%', '--delay': '1.2s' }}>
                    <div className="ring">
                        <span>Local Storage</span>
                    </div>
                    <p>100%</p>
                </div>

                <div className="skill-ring" style={{ '--progress': '100%', '--delay': '1.3s' }}>
                    <div className="ring">
                        <span>DOM Manipulation</span>
                    </div>
                    <p>100%</p>
                </div>



            </div>
        </section>

    );
}

export default Skills;