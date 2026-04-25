import React from 'react';
import './Contact.css';
import { Mail, ArrowUpRight, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section container" id="contact">
      <h2 className="section-title reveal">Get In Touch</h2>
      
      <div className="contact-grid">
        {/* Left Column: Link Bars */}
        <div className="contact-col reveal">
          
          <a href="mailto:dhruvbisht.207@gmail.com" className="contact-link-bar card">
            <div className="link-info">
              <span className="link-label">EMAIL</span>
              <p>dhruvbisht.207@gmail.com</p>
            </div>
            <div className="link-action">
              <span>Send</span>
              <ArrowUpRight size={18} />
            </div>
          </a>

          <a href="https://github.com/Dhruv205" target="_blank" rel="noopener noreferrer" className="contact-link-bar card">
            <div className="link-info">
              <span className="link-label">GITHUB</span>
              <p>@Dhruv205</p>
            </div>
            <div className="link-action">
              <span>View</span>
              <ArrowUpRight size={18} />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/dhruv-bisht-314a482b4/" target="_blank" rel="noopener noreferrer" className="contact-link-bar card">
            <div className="link-info">
              <span className="link-label">LINKEDIN</span>
              <p>Dhruv Bisht</p>
            </div>
            <div className="link-action">
              <span>Connect</span>
              <ArrowUpRight size={18} />
            </div>
          </a>

        </div>

        {/* Right Column: CTA */}
        <div className="contact-col reveal card cta-card" style={{ transitionDelay: '0.2s' }}>
          <div className="cta-icon"><MessageSquare size={32} /></div>
          <h3>Let's build something together</h3>
          <p>
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:dhruvbisht.207@gmail.com" className="btn btn-primary cta-btn">
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
