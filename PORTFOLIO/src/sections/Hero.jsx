import { useScrollAnimation } from '../hooks/useScrollAnimation';


function Hero () {
    const ref = useScrollAnimation();

    return (
        <section id="hero" ref={ref} className='animate-on-scroll'>
            <h1>Hi, I'm Damaris</h1>
            <img src="/images/damaProfile.jpg" alt="Damaris pic"/>
            
                {/* //  style= {{"max-width: 250px; border-radius: 50%; margin: 1.5rem auto; display: block; border: 4px solid #2dd4bf;" }} />  */}

        </section>

    );
}

export default Hero;


/* wanna add more animation to individual sections
ie hero, about, skills etc. more crazy. 
then work on harmburger to have direct links.
work on contact.jsx so from actually sends a message to personal email.
work on togle btn for dark and light mode.
finally how to remove old js portfolio, leave new one and deploy to github 
  */

