// SocialIcons.js
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="social-icons" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://github" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://behence.com" target="_blank" rel="noopener noreferrer">
        <FaBehance />
      </a>
      
    </div>
  );
};

export default SocialIcons;
