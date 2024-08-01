import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DelAdBtn({ advertisementId }) {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/advertisement/delete/${advertisementId}`);
            navigate('/adminAdvertisement'); // 삭제 후 이동할 페이지
        } catch (error) {
            console.error('Error deleting advertisement', error);
        } finally {
            setShow(false);
        }
    };

    return (
        <>
            <Button variant='warning' className='delAdBtn me-2' onClick={handleShow}>
                삭제
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>광고 삭제</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    해당 광고를 삭제하시겠습니까?<br />
                    (해당 광고가 삭제되며 복구할 수 없습니다.)
                    <div className='d-flex justify-content-end'>
                        <Button variant='warning' className='deleteNoBtn me-2' onClick={handleClose}>
                            아니오
                        </Button>
                        <Button variant='warning' className='deleteYesBtn' onClick={handleDelete}>
                            예
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default DelAdBtn;