import { useScrollAnimation } from '../hooks/useScrollAnimation';

function About() {
    const ref = useScrollAnimation();

    return (
        <section id="about" ref={ref} className="animate-on-scroll">
            <h2>About Me</h2>
            <p style={{ '--delay': '0.2s' }}>Full-stack developer (mostly learning backend with JavaScript right now)</p>
            <p style={{ '--delay': '0.2s' }}>I studied full-stack development at Moringa School. Before that I worked in client-facing and admin roles, so I
                like building tools that actually help people.</p>
            <p style={{ '--delay': '0.2s' }} >Currently working on  Javascript projects and learning more about web apps. Looking for junior dev / internship
                roles to keep growing.</p> 
        </section>
    );

}

export default About;