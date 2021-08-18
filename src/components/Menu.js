import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';


const Menu = (props) => {
    const {
        className
      } = props;

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

return(
    <div>
    <Button className="modal-button" onClick={toggle}><p className="btn-text">&#8801;</p></Button>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader className="modal-button-close" toggle={toggle}></ModalHeader>
      <ModalBody>
        <ul className="list-container">
        
            <li className="list">HOME</li>
           
           
            <li className="list">ABOUT</li>
            
           
            <li className="list">CONTACT</li>
            
 </ul>
      </ModalBody>
    </Modal>
  </div>
)

}
export default Menu;