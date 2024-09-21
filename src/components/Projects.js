import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../assets/images/about-im3.png';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    navigate('/home');
  }

  const projects = [
    { title: 'Igel', description: 'html,css,javascript,jquery,bootstrap', link: 'https://igel-ifuture.netlify.app/' },
    { title: 'Dataswiftsolutions', description: 'html4,css,javascript,jquery,bootstarp4', link: 'http://www.dataswiftsolutions.com/' },
    { title: 'aarkasolutions', description: 'html4,css3,javascript,jquery,bootstrap4', link: 'https://github.com/your-username/project3' },
    { title: 'corpclik', description: 'html4,css3,javascript,jquery,boottsrap', link: 'https://corpclick.netlify.app/' },
    { title: 'Movies', description: 'html4,css3,javascript,jquery,bootstrap4,phpand mysql', link: 'https://movies-sfl.netlify.app/' },
    { title: 'Zapc', description: 'html4,css3,javascript,jquery,boottsrap4,phpand mysql', link: 'https://movies-sfl.netlify.app/' },
    { title: 'todo', description: 'html4,css3,javascript,jquery,boottsrap4,Reactjs', link: 'https://github.com/sreevalli-2011/todo-react/upload' },
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
                        <h2 className="section-title">Projects</h2>
                        <div className="animated-bar"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {projects.map((project, index) => (
                <div key={index} className="col-md-4">
                  <div style={{ backgroundColor: 'lightgray', color: 'black' }} className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      <a href={project.link} target="_blank" className="card-link">Visit Site</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;