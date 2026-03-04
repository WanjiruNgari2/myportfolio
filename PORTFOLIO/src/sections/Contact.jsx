import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';



function Contact() {
  const ref = useScrollAnimation();


  return (
    <section id="contact" ref={ref} className="animate-on-scroll">
      <h2>Contact</h2>
      <div className="contact-card" style={{ '--delay': '0.2s' }}>

        <form action="mailto:wanjirungari2@gmail.com" method="post" encType="text/plain" style={{ '--delay': '0.2s' }}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form> <br></br>  <br></br>  <br></br>  

        <h3>Let's Connect</h3>
        <ul className="contact-links">
          <li>
            <a href="mailto:wanjirungari2@gmail.com">
              <FaEnvelope size={28} className='social-icon' />
            </a>
          </li>
          <li>
            <a href="https://github.com/WanjiruNgari2" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} className='social-icon' />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/damaris-ngari-6b1870199/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} className='social-icon' />

            </a>
          </li>
        </ul>
      </div>
    </section>

  );
}

export default Contact;