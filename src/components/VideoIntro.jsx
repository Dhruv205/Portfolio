import React, { useState, useRef } from 'react';
import './VideoIntro.css';
import { Play, UploadCloud, X } from 'lucide-react';

const VideoIntro = () => {
  const [videoSrc, setVideoSrc] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setIsPlaying(false);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRemoveVideo = () => {
    setVideoSrc(null);
    setIsPlaying(false);
  };

  return (
    <section className="section container" id="video-intro">
      <h2 className="section-title reveal">Introduction</h2>
      
      <div className="video-container reveal card">
        {!videoSrc ? (
          <div className="upload-placeholder" onClick={handleUploadClick}>
            <div className="upload-icon-wrapper">
              <UploadCloud size={48} className="upload-icon" />
            </div>
            <h3>Upload your introduction video</h3>
            <p>Click to browse files (MP4, WebM)</p>
            <input 
              type="file" 
              accept="video/*" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden-input"
            />
          </div>
        ) : (
          <div className="video-player-wrapper">
            <video 
              ref={videoRef}
              src={videoSrc}
              className="video-element"
              onEnded={() => setIsPlaying(false)}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              controls
            />
            {/* Custom Overlay (Optional if controls are disabled, but useful for initial play) */}
            {/* 
            {!isPlaying && (
              <div className="play-overlay" onClick={togglePlay}>
                <div className="play-button">
                  <Play size={40} />
                </div>
              </div>
            )} 
            */}
            <button className="remove-video-btn" onClick={handleRemoveVideo} title="Remove Video">
              <X size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoIntro;
