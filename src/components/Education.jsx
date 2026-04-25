import React from 'react';
import './Education.css';
import { Award, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section className="section container" id="education">
      <h2 className="section-title reveal">Background & Achievements</h2>
      
      <div className="edu-grid">
        {/* Left Column: Education */}
        <div className="edu-col reveal">
          <div className="col-header">
            <BookOpen size={24} className="col-icon" />
            <h3>Education</h3>
          </div>
          
          <div className="timeline-card card">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <p className="timeline-date">2023 - 2027</p>
              <h4>Graphic Era Hill University</h4>
              <p className="timeline-subtitle">B.Tech in Computer Science & Engineering</p>
              <p className="timeline-meta">CGPA: 6.81 / 10.0</p>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <p className="timeline-date">2023</p>
              <h4>Army Public School (APS), Nehru Road</h4>
              <p className="timeline-subtitle">Class XII, CBSE</p>
              <p className="timeline-meta">Percentage: 83.4%</p>
            </div>
            
            <div className="timeline-item last">
              <div className="timeline-dot"></div>
              <p className="timeline-date">2021</p>
              <h4>Army Public School (APS), Nehru Road</h4>
              <p className="timeline-subtitle">Class X, CBSE</p>
              <p className="timeline-meta">Percentage: 92.8%</p>
            </div>
          </div>
        </div>

        {/* Right Column: Certs & Achievements */}
        <div className="edu-col reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="col-header">
            <Award size={24} className="col-icon" />
            <h3>Certifications</h3>
          </div>
          
          <div className="cert-list">
            <div className="cert-card card">
              <div className="cert-top">
                <h4>AWS Skill Builder</h4>
                <span className="cert-date">2025</span>
              </div>
              <p className="cert-subtitle">Artificial Intelligence Practitioner Learning Plan</p>
              <ul className="cert-bullets">
                <li>Successfully cleared the assessment demonstrating core AI concepts.</li>
                <li>Gained deep understanding of AWS fundamentals and AI workflows.</li>
              </ul>
            </div>
            
            <div className="cert-card card">
              <div className="cert-top">
                <h4>AWS Skill Builder</h4>
                <span className="cert-date">2025</span>
              </div>
              <p className="cert-subtitle">Cloud Essentials – Knowledge Badge</p>
              <ul className="cert-bullets">
                <li>Completed Readiness Path with hands-on labs.</li>
                <li>Covered cloud computing models, AWS services, security, and pricing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
