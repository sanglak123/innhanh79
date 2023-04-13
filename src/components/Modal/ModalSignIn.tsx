import React from "react";
import { Button, Modal } from "react-bootstrap";
interface Modal {
  show: boolean;
  setShow: any;
}

const ModalSignIn = ({ show, setShow }: Modal) => {
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose} animation={false} fullscreen>
      <Modal.Header closeButton>
        <Modal.Title>Đăng Nhập</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
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

export default ModalSignIn;
