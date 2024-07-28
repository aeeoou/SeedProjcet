import { useState } from 'react';
import {Row, Col, Button, Modal} from 'react-bootstrap'

function UserCheckModal({ btnName, btnWidth, modalBody, completeBtn, onClickUserAdd, btnType, condition}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const clickSignUpButton = () => {
      handleShow();
      onClickUserAdd();
  }
  return (
    <>
        <Button variant="warning" onClick={clickSignUpButton} className={btnWidth} type={btnType} disabled={condition}>
                    {btnName}
        </Button>

        <Modal show={show} onHide={handleClose}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
        <Modal.Body>
            <Row>
                <Col>
                    <Row className='text-center'>
                        <p>
                            {modalBody}
                        </p>
                    </Row>
                    <Row className='text-center mt-5'>
                        <div>
                            <Button variant="warning" onClick={handleClose} href={completeBtn}>
                                확인
                            </Button>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Modal.Body>
        </Modal>
    </>
    
  );
}

export default UserCheckModal;