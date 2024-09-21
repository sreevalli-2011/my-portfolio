// src/Resume.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import bannerImage from '../assets/images/about-4.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import './style.css';
import { faCompactDisc, faImages } from '@fortawesome/free-solid-svg-icons';
import { faCode, faDesktop, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher, faUserGraduate, faUsers } from '@fortawesome/free-solid-svg-icons';



// ...

<div className="col-12 col-md-6 col-lg-4">
  <div className="single-service">
   
    <h6 className="service-title">Frontend Development</h6>
    <p className="service-description">As a front-end developer, I have worked on numerous projects, consistently updating my skills to stay current with evolving technologies. My dedication to learning has enabled me to deliver high-quality work.t.</p>
  </div>
</div>

const About = () => {
  const [icon, setIcon] = useState('ion-md-logo-css3');
  // Define the state to manage whether the component is open or not
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate(); 

  // Function to close the component

  const handleClose = () => {
    setIsOpen(false);  // Close the modal
    navigate('/home');  // Redirect to the homepage after closing
  };

  return (
    <>
      {isOpen && ( // Only show the lightbox if isOpen is true
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
                        <h2 className="section-title">About Me</h2>
                        <div className="animated-bar"></div>
                      </div>
                    </div>
                  </div>
                  {/* Info section */}
                  <div className="info-section single-section">
                    <div className="row align-items-center">
                      {/* Picture part */}
                      <div className="col-12 col-lg-5 info-img">
                        
                        <img src={bannerImage} alt="about-4" className="img-fluid" style={{ width: '400px', height: '500px' }} />
                      </div>
                      {/* Content part */}
                      <div className="col-12 col-lg-7 info-content">
                        <div className="content-block">
                          <h2 className="content-subtitle">Who am I?</h2>
                          <h6 className="content-title">I'm sreevalli, a Front-end Developer</h6>
                          <div className="content-description">
                            <p>
                            Frontend Developer with 5.5 years of experience in User Interface Development using various 
web technologies. Expertise in HTML, CSS, JavaScript, Bootstrap, Reactjs, PHP, MySQL. Proficient 
in analyzing website and application requirements to deliver user-friendly and efficient 
solutions.       
                            </p>
                          </div>
                          <address className="content-info">
                            <div className="row">
                              <div className="col-12 col-md-6 single-info"><span>Name:</span>
                                <p>Sreevalli</p>
                              </div>
                              <div className="col-12 col-md-6 single-info"><span>Email:</span>
                                <p><a href="mailto:valliwebworkz@gmail.com">valliwebworkz@gmail.com</a></p>
                              </div>
                            </div>
                           <div className="row">
                              <div className="col-12 col-md-6 single-info"><span>Experience:</span>
                                <p>5 yeras</p>
                              </div>
                              <div className="col-12 col-md-6 single-info"><span>From:</span>
                                <p>Bangalore, Karnataka</p>
                              </div>
                            </div>
                          </address>
                          <div className="d-block d-sm-flex align-items-center">
                            <a className="btn content-download button-main button-scheme" href="#0" role="button">Download CV</a>
                            <ul className="list-unstyled list-inline content-follow">
                              <li className="list-inline-item"><a href="#0"><i className="icon ion-logo-twitter"></i></a></li>
                              <li className="list-inline-item"><a href="#0"><i className="icon ion-logo-instagram"></i></a></li>
                              <li className="list-inline-item"><a href="#0"><i className="icon ion-logo-linkedin"></i></a></li>
                              <li className="list-inline-item"><a href="#0"><i className="icon ion-logo-github"></i></a></li>
                              <li className="list-inline-item"><a href="#0"><i className="icon ion-logo-facebook"></i></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services section */}
                  <div className="services-section single-section">
                    <div className="row">
                      <div className="col-12">
                        <div className="section-heading">
                          <p className="section-description">Services I offer to my clients</p>
                          <h2 className="section-title">My Services</h2>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {/* Single service */}
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="single-service">
                        <div className="album-icon">
                                <FontAwesomeIcon icon={faImages} /> {/* This shows the photo album icon */}
                            </div>
                          <h6 className="service-title">Album Design</h6>
                          <p className="service-description">I began my career as an album maker before upgrading my skills and transitioning into a web designer role. This shift allowed me to work on diverse design and development projects.</p>
                        </div>
                      </div>
                      {/* Other services... */}
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="single-service">
                        <div className="frontend-icon">
                        <FontAwesomeIcon icon={faDesktop} className="icon-desktop" />

                        </div>
                          <h6 className="service-title">Frontend Development</h6>
                          <p className="service-description">As a front-end developer, I have worked on numerous projects, consistently updating my skills to stay current with evolving technologies. My dedication to learning has enabled me to deliver high-quality work.t.</p>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="single-service">
                        <div className="trainer-icon">
                                <FontAwesomeIcon icon={faUsers} className="icon-group" />
                                      </div>
                                 <h6 className="service-title">Trainer</h6>
                          <p className="service-description">I have experience in web development training as well, and I am committed to providing the best guidance and output to my students..</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Add Testimonials and Pricing sections similarly */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
