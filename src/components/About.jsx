import React from 'react';
import './About.css';
import { Target, Code, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section className="section container" id="about">
      <h2 className="section-title reveal">About Me</h2>
      
      <div className="about-grid reveal">
        <div className="about-content">
          <p className="large-text">
            I am a B.Tech Computer Science student at Graphic Era Hill University with a strong foundation in problem-solving and full-stack development.
          </p>
          <p>
            With an acute focus on Data Structures and Algorithms, I bring analytical thinking to software development. I have hands-on experience building complex setups like Railway Reservation Systems and AI-based Book Recommendations, merging modern frameworks (React) with robust backends (Node, Express, MySQL/MongoDB).
          </p>
          <p>
            My goal is to craft efficient, scalable applications while constantly upgrading my technical toolkit through hands-on projects and algorithmic challenges.
          </p>
        </div>
        
        <div className="about-snapshot card">
          <span className="tag">Quick Snapshot</span>
          
          <div className="snapshot-stats">
            <div className="stat-item">
              <div className="stat-icon"><Code size={20} /></div>
              <div className="stat-details">
                <h3>3+</h3>
                <p>Full-Stack Projects Built</p>
              </div>
            </div>
            
            <div className="stat-item" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', margin: '1rem 0', padding: '1rem 0' }}>
              <div className="stat-icon"><Target size={20} /></div>
              <div className="stat-details">
                <h3>250+</h3>
                <p>LeetCode Problems Solved</p>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon"><Trophy size={20} /></div>
              <div className="stat-details">
                <h3>2</h3>
                <p>AWS Cloud Badges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
