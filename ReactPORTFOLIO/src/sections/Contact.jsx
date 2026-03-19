import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';
import './contact.css';

function Contact() {
  const ref = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" ref={ref} className="animate-on-scroll">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        {/* Form using FormSubmit */}
        <div className="contact-form-container" style={{ '--delay': '0.3s' }}>
          <h3>Send Me a Message</h3>

          {submitted ? (
            <div className='success-message'>
              <h4>Thank you for reaching out! 🎉</h4>
              <p>I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form
              action="https://formsubmit.co/wanjirungari2@gmail.com"
              method="POST"
              className="contact-form"
              onSubmit={() => setSubmitted(true)}
            >
              {/* Honeypot to prevent spam */}
              <input type='text' name='_honey' style={{ display: 'none' }} />
              
              {/* Disable captcha - FIXED: value as string */}
              <input type='hidden' name='_captcha' value='false' />
              
              {/* Redirect after submit */}
              <input type='hidden' name='_next' value={window.location.href} />
              
              {/* Optional: Custom email subject prefix */}
              <input type='hidden' name='_subject' value='New contact form submission!' />

              <div className='form-group'>
                <input type='text' name='name' placeholder='Your name' required />
              </div>

              <div className='form-group'>
                <input type='email' name='email' placeholder='Your email' required />
              </div>

              <div className="form-group">
                <input type="text" name="_subject" placeholder="Subject" required />
              </div>

              <div className="form-group">
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Social links section */}
      <div>
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