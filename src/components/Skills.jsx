import React from 'react';
import './Skills.css';
import { Terminal, Layout, Database } from 'lucide-react';

const Skills = () => {
  return (
    <section className="section container" id="skills">
      <h2 className="section-title reveal">Technical Skills</h2>
      
      <div className="skills-grid">
        <div className="card skill-card reveal">
          <div className="skill-header">
            <Terminal className="skill-icon" size={24} />
            <h3>Languages</h3>
          </div>
          <div className="pill-container">
            <span className="pill">Java</span>
            <span className="pill">C++</span>
            <span className="pill">JavaScript</span>
            <span className="pill">HTML / CSS</span>
          </div>
        </div>

        <div className="card skill-card reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="skill-header">
            <Layout className="skill-icon" size={24} />
            <h3>Frontend & Frameworks</h3>
          </div>
          <div className="pill-container">
            <span className="pill">React JS</span>
            <span className="pill">Node.js</span>
            <span className="pill">Express</span>
            <span className="pill">Tailwind CSS</span>
          </div>
        </div>

        <div className="card skill-card reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="skill-header">
            <Database className="skill-icon" size={24} />
            <h3>Cloud, DB & Tools</h3>
          </div>
          <div className="pill-container">
            <span className="pill">AWS</span>
            <span className="pill">MySQL</span>
            <span className="pill">MongoDB</span>
            <span className="pill">VS Code</span>
            <span className="pill">GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
