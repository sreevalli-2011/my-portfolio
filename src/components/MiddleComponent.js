import React, {useEffect, useRef } from 'react';
import './style.css'; 

import brushImage from '../assets/images/brush-a.png';
import Typed from 'typed.js';  
import { FaFacebook,  FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';

{/*const MiddleComponent = () => {
  const words = ["Developer", "Designer", "Freelancer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);*/}

  const MiddleComponent = () => {
    const typedRef = useRef(null); // Create a reference for Typed.js
  
    useEffect(() => {
      const options = {
        strings: ["Developer", "Designer", "Freelancer"], // Words you want to rotate
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
      };
  
      const typed = new Typed(typedRef.current, options); // Initialize Typed.js
  
      return () => {
        typed.destroy(); // Cleanup Typed.js on unmount
      };
    }, []);
  

  return (
    <div className="container-fluid home-area d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="row align-items-center w-100">
        {/* Text Column */}
     
        
        {/* middle image*/}
        <div className="col-md-2 text-center">
        <div className="bottom-left-image">
           <img className="brush-a" src={brushImage} alt="1" />
         </div>
         </div>

     <div className="col-md-8 text-center">
          <h1 className='middle-content'>Sreevalli.k</h1>
          <h1>I'm a Web<br></br><span className="auto-type" ref={typedRef}></span> {/* Typed.js target */}
          </h1>
        </div>

        <div className="col-md-2">
          <div className="social-icons">
            <a href="https://www.facebook.com/sreevalli.2011" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://github.com/sreevalli-2011" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="www.linkedin.com/in/sree-valli" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.behance.net/valliwebwo4d83" target="_blank" rel="noopener noreferrer">
              <FaBehance />
            </a>
          </div>
       </div> 
    </div>
 </div>

     


  
  );
};

export default MiddleComponent;





