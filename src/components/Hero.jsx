import React from 'react';
import { Mail, MapPin, Code, Briefcase, Phone } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="section hero-section container pt-32" id="hero">
      <div className="hero-card card reveal">
        <div className="hero-grid">
          <div className="hero-left">
            <span className="tag">SOFTWARE ENGINEER</span>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Dhruv Bisht</span>.<br />
              I build scalable applications.
            </h1>
            <p className="hero-bio">
              A passionate developer specializing in React, Java, and modern web environments. I focus on developing clean interfaces and efficient backend logic to create complete, robust software solutions.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="mailto:dhruvbisht.207@gmail.com" className="btn btn-outline">Email me</a>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="sub-card contact-card">
              <div className="contact-item">
                <div className="icon-box"><Phone size={18} /></div>
                <div className="contact-text">
                  <span>Phone</span>
                  <p>+91 9369842058</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box"><Mail size={18} /></div>
                <div className="contact-text">
                  <span>Email</span>
                  <p>dhruvbisht.207@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box"><MapPin size={18} /></div>
                <div className="contact-text">
                  <span>Location</span>
                  <p>India</p>
                </div>
              </div>
            </div>

            <div className="sub-card social-card">
              <p>Find me on</p>
              <div className="social-links">
                <a href="https://github.com/Dhruv205" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <Code size={20} />
                </a>
                <a href="https://www.linkedin.com/in/dhruv-bisht-314a482b4/" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <Briefcase size={20} />
                </a>
                {/* Provided bitly links from resume just in case */}
                <a href="https://bit.ly/4txLPEy_" target="_blank" rel="noopener noreferrer" className="social-btn text-xs">
                  Res1
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
