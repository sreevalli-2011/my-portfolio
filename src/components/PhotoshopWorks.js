import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/images/pw-a.jpg';
import img2 from '../assets/images/pw-b.jpg';
import img3 from '../assets/images/pw-c.jpg';
import img4 from '../assets/images/pw-d.jpg';
import img5 from '../assets/images/pw-g.jpg';
import img6 from '../assets/images/pw-h.jpg';
import img7 from '../assets/images/pw-e.jpg';
import img8 from '../assets/images/pw-f.jpeg';

const PhotoshopWorks = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    navigate('/home');
  };

  const images = [
    { src: img1, alt: 'Design 1' },
    { src: img2, alt: 'Design 2' },
    { src: img3, alt: 'Design 3' },
    { src: img4, alt: 'Design 4' },
    { src: img5, alt: 'Design 5' },
    { src: img6, alt: 'Design 6' },
    { src: img7, alt: 'Design 7' },
    { src: img8, alt: 'Design 8' },
  ];

  return (
    <>
      {isOpen && (
        <div className="lightbox-wrapper" id="about">
          <div className="container">
            <div className="lightbox-close">
              <div className="close-btn" onClick={handleClose}>
                <span className="btn-line"></span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="lightbox-content">
                  <div className="row">
                    <div className="col-12">
                      <div className="section-heading page-heading">
                        <p className="section-description">Get to know me</p>
                        <h2 className="section-title">Photoshop Works</h2>
                        <div className="animated-bar"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {images.map((image, index) => (
                <div key={index} className="col-md-4">
                  <img src={image.src} alt={image.alt} className="img-fluid" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoshopWorks;



