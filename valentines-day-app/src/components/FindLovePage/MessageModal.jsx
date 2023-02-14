import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function MessageModal({ email, setIsModal }) {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setIsModal(false);
        setShow(false);
    }
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Message User </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <FloatingLabel controlId="floatingTextarea2" label="Your message">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Send!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MessageModal