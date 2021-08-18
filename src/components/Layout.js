import React from 'react';
import LogoSmall from '../img/icons/logosmall.png'
import Love from '../img/icons/love.png';
import Plane from '../img/icons/plane.png';

const Layout = () => {
  return (
    <div>
        
    <div id="app" className="flex-container">
    
    <div className="block one">
    <a href="/">
      
    <img 
    className="img" 
    src={LogoSmall} 
    alt="camera"
    style={{paddingLeft:"50px",
    paddingBottom:"10px"
  }}
    />
    <p className="text-block-one">@nastkazgdanska</p>
    </a>
    <div>
    
    </div>
    </div>
  
    <div className="block two">
    <a className="imgHeart" href="/About">
      
      <img
      className="imgHeart"  
      src={Love} 
      alt="heart"
      style={{paddingLeft:"15px",
      paddingBottom:"10px"
    }}
      />
      <p className="text-block-one">About Me</p>
      </a>
    </div>
    </div>
    <div className="container-flex">
    <div className="block three">
    <a href="#">
      
      <p className="text-block-three">WELCOME</p>
      <p className="text-block-three">I AM ANASTASIIA GANUSHKEVYCH</p>
      <p className="text-block-three">AND I'M A PROFESSIONAL PHOTOGRAPHER</p>
      </a>
     
    </div>
    <div className="block four">
    <a href="/">
      <img 
      className="img" 
      src={Plane} 
      alt="plane"
      style={{
      paddingBottom:"10px"
    }}
      />
      <p className="text-block-one">SOCIAL</p>
      </a>
    </div>
    </div>
    </div>
  );
}

export default Layout;