import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import FormWrapper from './../Form/Form';

function ModalWrapper(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div>
            <Button variant={props.btnVariant}  size="sm" onClick={handleShow}>
               {props.btnText}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormWrapper device={props.device} formFunction={props.formFunction} closeModal={handleClose}  />
                </Modal.Body>
            </Modal>
        </div>
    );
}


export default ModalWrapper;

