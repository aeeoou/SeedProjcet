import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function CancelBtn () {
    const [show, setShow] = useState(false)

    const onClose = () => setShow(false)
    const onShow = () => setShow(true)

    return (
        <>
            <Button variant='warning' className='reservationCancelBtn' onClick={onShow}>취소</Button>

            <Modal show={show} onHide={onClose}>
                <Modal.Header>
                    <Modal.Title>예약 취소</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    예약을 취소하시겠습니까?<br/>
                    <div className='d-flex justify-content-end'>
                        <Button variant='warning' className='cancelNoBtn me-2' onClick={onClose}>
                            아니오
                        </Button>
                        <a href='/reservationDeleteComplete'>
                            <Button variant='warning' className='cancelYesBtn'>
                                예
                            </Button>
                        </a>
                    </div>
                </Modal.Body>      
            </Modal>
        </>
    )
}

export default CancelBtn