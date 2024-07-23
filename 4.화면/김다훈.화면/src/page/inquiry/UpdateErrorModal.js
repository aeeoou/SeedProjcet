import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function UpdateErrorModal () {
    const [show, setShow] = useState(false)

    const onClose = () => setShow(false)
    const onShow = () => setShow(true)

    return (
        <>
            <Button variant='warning' className='updateErrorBtn me-2' onClick={onShow}>수정</Button>

            <Modal show={show} onHide={onClose}>
                <Modal.Header>
                    <Modal.Title>오류</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>
                답변이 완료되었으므로 수정이 불가능합니다.
                    <div className='d-flex justify-content-end'>
                        <Button variant='warning' className='errorCheckedBtn me-2' onClick={onClose}>
                            확인
                        </Button>
                    </div>
                </Modal.Body>      
            </Modal>
        </>
    )
}

export default UpdateErrorModal