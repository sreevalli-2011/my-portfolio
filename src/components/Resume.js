import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResumeModal() {
  // State to track the visibility of the modal
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  // Function to handle closing the modal
  const closeModal = () => {
    setIsOpen(false);  // Close the modal
    navigate('/');
  };

  return (
    <>
      {/* Render the modal only if it's open */}
      {isOpen && (
        <div className="lightbox-wrapper" id="resume" data-simplebar>
          <div className="container">
            {/* Close button for modal */}
            <div className="lightbox-close">
              <div
                className="close-btn"
                onClick={(e) => {
                  e.preventDefault();  // Prevent default behavior (e.g., navigation)
                  closeModal();         // Close the modal
                }}
              >
                <span className="btn-line"></span>
              </div>
            </div>

            {/* Resume content */}
            <div className="row">
              <div className="col-12">
                <div className="lightbox-content">
                  {/* Resume section header */}
                  <div className="section-heading page-heading">
                    <p className="section-description">Check out my Resume</p>
                    <h2 className="section-title">Resume</h2>
                    <div className="animated-bar"></div>
                  </div>

                  {/* Resume details */}
                  <div className="resume-section single-section">
                    <div className="row">
                      {/* Education section */}
                      <div className="col-12 col-md-6">
                        <div className="col-block education">
                          <h3 className="col-title">Education</h3>
                          <div className="resume-item">
                            <span className="item-arrow"></span>
                            <h5 className="item-title">M.Sc (Microbiology)</h5>
                            <span className="item-details">Acharya Nagarjuna University / 2012 - 2014</span>
                            <p className="item-description">
                              "I completed my Master of Science (M.Sc) in Microbiology from Acharya Nagarjuna University."
                            </p>
                          </div>
                          <div className="resume-item">
                            <span className="item-arrow"></span>
                            <h5 className="item-title">B.Sc (Microbiology)</h5>
                            <span className="item-details">Andhra University / 2000 - 2002</span>
                            <p className="item-description">B.Sc. from Andhra University</p>
                          </div>
                          <div className="resume-item">
                            <span className="item-arrow"></span>
                            <h5 className="item-title">Prism Multimedia</h5>
                            <span className="item-details">2010</span>
                            <p className="item-description">
                              I completed web development training at Prism Multimedia in Hyderabad, where I gained hands-on experience in various frontend and backend technologies.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Experience section */}
                      <div className="col-12 col-md-6">
                        <div className="col-block experience">
                          <h3 className="col-title">Experience</h3>
                          <div className="resume-item">
                            <span className="item-arrow"></span>
                            <h5 className="item-title">SFL GROUP</h5>
                            <span className="item-details">Feb 2024</span>
                            <p className="item-description">
                              Team Lead at SFL Group, responsible for both frontend and backend development.
                            </p>
                          </div>
                          <div className="resume-item">
                            <span className="item-arrow"></span>
                            <h5 className="item-title">Arena Animation</h5>
                            <span className="item-details">Apr 2023 - Feb 2024</span>
                            <p className="item-description">
                              Trainer at Arena Animation, specializing in both frontend and backend training for numerous students.
                            </p>
                          </div>
                          <div className="resume-item">
                            <span className="item-arrow"></span>
                            <h5 className="item-title">Frux Infotech</h5>
                            <span className="item-details">Apr 2023 - Feb 2024</span>
                            <p className="item-description">
                              Trainer at Frux Infotech, specializing in both frontend and backend training for numerous students.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills section */}
                  <div className="skills-section single-section">
                    <div className="row">
                      <div className="col-12">
                        <div className="section-heading">
                          <p className="section-description">My level of knowledge in some tools</p>
                          <h2 className="section-title">My Skills</h2>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {['HTML/CSS', 'Web Design', 'JavaScript', 'Bootstrap', 'React JS', 'PHP MyAdmin'].map((skill, index) => {
                        const percentage = [95, 80, 90, 90, 90, 90][index]; // Adjust the percentages as needed
                        return (
                          <div className="col-12 col-md-4" key={skill}>
                            <div className="single-skill" data-percentage={percentage}>
                              <div className="skill-info">
                                <span className="skill-name">{skill}</span>
                                <span className="skill-percentage">{percentage}%</span>
                              </div>
                              <div className="progress skill-progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: `${percentage}%`, backgroundColor: '#009e66' }} // Set background color to green
                                  aria-valuenow={percentage}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  {percentage}%
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ResumeModal;


      




