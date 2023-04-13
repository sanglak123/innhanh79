import React from "react";
import { Button, Modal } from "react-bootstrap";
interface Modal {
  show: boolean;
  setShow: any;
}

const ModalSetting = ({ show, setShow }: Modal) => {
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalSetting;
