// src/Contact.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';



const Contact = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., send data to server)
    console.log('Form Data:', formData);
    navigate('/'); // Navigate to another page after form submission
  };
  const closeModal = () => {
    setIsOpen(false);  // Close the modal
    navigate('/'); 
  };

  return (
       <>
      {/* Render the modal only if it's open */}
      {isOpen && (
    <div className="lightbox-wrapper" id="contact">
      <div className="container">
        <div className="lightbox-close">
          <div className="close-btn" data-modal-close=""onClick={closeModal}><span className="btn-line"></span></div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="lightbox-content">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading page-heading">
                    <p className="section-description">Feel free to contact me anytime</p>
                    <h2 className="section-title">Get in Touch</h2>
                    <div className="animated-bar"></div>
                  </div>
                </div>
              </div>
              {/* Contact Section */}
              <div className="contact-section single-section">
                <div className="row">
                  {/* Contact Form */}
                  <div className="col-12 col-lg-7">
                    <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                      <h4 className="content-title">Message Me</h4>
                      <div className="row">
                        <div className="col-12 col-md-6 form-group">
                          <input
                            className="form-control"
                            id="contact-name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-12 col-md-6 form-group">
                          <input
                            className="form-control"
                            id="contact-email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-12 form-group">
                          <input
                            className="form-control"
                            id="contact-subject"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-12 form-group form-message">
                          <textarea
                            className="form-control"
                            id="contact-message"
                            name="message"
                            placeholder="Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                          ></textarea>
                        </div>
                        <div className="col-12 form-submit">
                          <button className="btn button-main button-scheme" id="contact-submit" type="submit">
                            Send Message
                          </button>
                          <p className="contact-feedback"></p>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* Contact Info */}
                  <div className="col-12 col-lg-5">
                    <div className="contact-info">
                      <h4 className="content-title">Contact Info</h4>
                      <p className="info-description">Always available for freelance work if the right project comes along. Feel free to contact me!</p>
                      <ul className="list-unstyled list-info">
                        <li>
                          <div className="media align-items-center">
                            <span className="info-icon">
                            <FontAwesomeIcon icon={faUser} />

                            </span>
                            <div className="media-body info-details">
                              <h6 className="info-type">Name</h6>
                              <span className="info-value">Sreevalli</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media align-items-center">
                            <span className="info-icon">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </span>
                            <div className="media-body info-details">
                              <h6 className="info-type">Location</h6>
                              <span className="info-value">Banswadi, Bangalore</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media align-items-center">
                            <span className="info-icon">
                            <FontAwesomeIcon icon={faPhone} />
                            </span>
                            <div className="media-body info-details">
                              <h6 className="info-type">Call Me</h6>
                              <span className="info-value">
                                <a href="9948225875">9948225875</a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media align-items-center">
                            <span className="info-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <div className="media-body info-details">
                              <h6 className="info-type">Email Me</h6>
                              <span className="info-value">
                                <a href="mailto:emma@example.com">valliwebworkz@gmail.com</a>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
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

export default Contact;


