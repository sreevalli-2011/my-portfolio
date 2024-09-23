// Home.js
import React from 'react';
import NavBar from './NavBar';
import MiddleComponent from './MiddleComponent';



const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="content">
        <MiddleComponent />
        
      </div>
 
    </div>
  );
};

export default Home;

