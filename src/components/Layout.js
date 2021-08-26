import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import About from './About';
import LogoSmall from '../img/icons/logosmall.png'
import Love from '../img/icons/love.png';
import Plane from '../img/icons/plane.png';
import Facebook from '../img/icons/facebook.png';
import Gmail from '../img/icons/gmail.png';
import Instagram from '../img/icons/instagram.png';

const Layout = (props) => {

  const {
    className
  } = props;

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

  return (
    <div>
        
    <div id="app" className="flex-container">
    
    <div className="block one">
    <div>
      
    <img 
    className="img" 
    src={LogoSmall} 
    alt="camera"
    style={{paddingLeft:"50px",
    paddingBottom:"10px",
    
  }}
    />
    <p className="text-block-one">@nastkazgdanska</p>
    </div>
    <div>
    
    </div>
    </div>
  
    <div className="block two" id="block-two">
    <div className="imgHeart" href="/About" onClick={toggle}>
      
      <img
      src={Love} 
      alt="heart"
      style={{paddingLeft:"15px",
      paddingBottom:"10px"
    }}
      />
    <p className="text-block-one">About Me</p>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader className="modal-button-close" toggle={toggle}></ModalHeader>
      <ModalBody>
    <About/>
      </ModalBody>
    </Modal>
      </div>
    </div>
    </div>
    <div className="container-flex">
    <div className="block three">
    <a href="#" className="imgHeart">
      <img 
      className="img-plane"
      src={Plane} 
      alt="plane"
      style={{
      paddingBottom:"10px",
      paddingLeft: "10px"
    }}
      />
      <p className="text-block-one">CONTACT</p>
      </a>
         
    </div>
    <div className="block four">
    <div>
      
      <p className="text-block-three">WELCOME</p>
      <p className="text-block-three">I AM ANASTASIIA GANUSHKEVYCH</p>
      <p className="text-block-three">AND I'M A PROFESSIONAL PHOTOGRAPHER</p>
      </div>
     
    </div>
    
    </div>
    <div className="container-flex-three">
    <div className="block five">
    <div>
      <a href="https://www.facebook.com/AnastasiiaGanushkevych/photos/?ref=page_internal" aria-label="Facebook">
      <p className="text-block-five">GALLERY</p>
      </a>
      </div>
     
    </div>
    <div className="block six">
      <div>
    <p className="text-block-six">SOCIAL</p>
    <div>
      <a href="https://www.facebook.com/AnastasiiaGanushkevych/" aria-label="Facebook">
      <img 
      className="facebook" 
      src={Facebook} 
      alt="facebook"
      style={{
      paddingBottom:"10px" 
    }}
      />
      </a>
      <a href="mailto:ganushkevycha@gmail.com" aria-label="Gmail">
      <img 
      className="gmail" 
      src={Gmail} 
      alt="gmail"
      style={{
      paddingBottom:"10px"
    }}
      />
      </a>
      <a href="https://www.instagram.com/nastkazgdanska/" aria-label="Instagram">
      <img 
      className="instagram" 
      src={Instagram} 
      alt="instagram"
      style={{
      paddingBottom:"10px"
    }}
      />
      </a>
      </div>
      </div>
      
    </div>
    
    </div>
    </div>
  );
}

export default Layout;