import React from 'react';
import './Projects.css';
import { ArrowUpRight, Code } from 'lucide-react';

const Projects = () => {
  return (
    <section className="section container" id="projects">
      <h2 className="section-title reveal">Selected Projects</h2>
      
      <div className="projects-stack">
        
        {/* Project 1 */}
        <div className="project-card card reveal">
          <div className="project-header">
            <span className="tag">Featured Project</span>
            <div className="title-row">
              <h3>Railway Reservation System</h3>
              <a href="https://github.com/Dhruv205" className="project-link"><ArrowUpRight size={24} /></a>
            </div>
            <p className="project-date">Feb 2024 - Apr 2024 | Mentor: Manisha Aeri</p>
          </div>
          
          <p className="project-desc">
            A full-stack system enabling users to search and manage train info, featuring an optimized algorithm to sort trains by price and travel duration.
          </p>
          
          <div className="pill-container mb-4">
            <span className="pill">React</span>
            <span className="pill">Node.js</span>
            <span className="pill">Express</span>
            <span className="pill">MySQL</span>
            <span className="pill">Tailwind CSS</span>
          </div>

          <div className="project-details">
            <div className="detail-block">
              <strong>DSA Integration</strong>
              <p>Implemented arrays and sorting algorithms for efficient data handling.</p>
            </div>
            <div className="detail-block">
              <strong>REST APIs</strong>
              <p>Built robust APIs to fetch real-time data seamlessly into a modern responsive UI.</p>
            </div>
          </div>
          
          <div className="project-footer">
            <a href="https://github.com/Dhruv205" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Code size={18} /> View Repository
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card card reveal">
          <div className="project-header">
            <span className="tag">Full-Stack Application</span>
            <div className="title-row">
              <h3>Hospital Appointment System</h3>
              <a href="https://github.com/Dhruv205" className="project-link"><ArrowUpRight size={24} /></a>
            </div>
            <p className="project-date">Aug 2025 - Oct 2025 | Mentor: Rahul Chauhan</p>
          </div>
          
          <p className="project-desc">
            A web-based system for patients to easily book and manage doctor appointments online.
          </p>
          
          <div className="pill-container mb-4">
            <span className="pill">Frontend</span>
            <span className="pill">Backend</span>
            <span className="pill">Database Integration</span>
          </div>

          <div className="project-details">
            <div className="detail-block">
              <strong>Scheduling Engine</strong>
              <p>Designed a simple and responsive interface for efficient appointment mapping.</p>
            </div>
            <div className="detail-block">
              <strong>Data Management</strong>
              <p>Store and retrieve patient, doctor, and session details accurately.</p>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card card reveal">
          <div className="project-header">
            <span className="tag">Machine Learning</span>
            <div className="title-row">
              <h3>Library Management with AI Recommender</h3>
              <a href="https://github.com/Dhruv205" className="project-link"><ArrowUpRight size={24} /></a>
            </div>
            <p className="project-date">Jul 2025 - Sep 2025 | Mentor: Tashi Negi</p>
          </div>
          
          <p className="project-desc">
            Comprehensive library backend combined with an intelligent recommender that suggests books based on user history and preferences.
          </p>
          
          <div className="pill-container mb-4">
            <span className="pill">AI / ML</span>
            <span className="pill">Backend Workflows</span>
            <span className="pill">Inventory Systems</span>
          </div>

          <div className="project-details">
            <div className="detail-block">
              <strong>Intelligent Suggestions</strong>
              <p>Integrated machine learning techniques to personalize the borrowing experience.</p>
            </div>
            <div className="detail-block">
              <strong>Inventory Ops</strong>
              <p>Handle issue/return records efficiently with optimized backend logic.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
