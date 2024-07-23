import { useState } from 'react';
import {Row, Col, Button, Modal} from 'react-bootstrap'

function InquiryCheckModal({ btnName, btnCss, modalBody, completeBtn, btnstyle}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Button variant="warning" onClick={handleShow} className={btnCss} style={{width:btnstyle}}>
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
                    <Row className='text-center mt-5 float-end '>
                        <div>
                            <Button variant="warning" className='me-3' onClick={handleClose} href={completeBtn}>
                                삭제
                            </Button>
                            <Button variant="warning" onClick={handleClose}>
                                취소
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

export default InquiryCheckModal;