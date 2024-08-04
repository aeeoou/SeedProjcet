import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function DeleteMemBtn ({del}) {
    const [show, setShow] = useState(false)

    const onClose = () => setShow(false)
    const onShow = () => setShow(true)

    return (
        <>
            <Button variant='warning' className='delMemBtn me-2' onClick={onShow}>삭제</Button>

            <Modal show={show} onHide={onClose}>
                <Modal.Header>
                    <Modal.Title>회원 삭제</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                회원을 강제 탈퇴시키겠습니까?<br/>
                (회원의 정보가 삭제되며 복구할 수 없습니다.)
                    <div className='d-flex justify-content-end'>
                        <Button variant='warning' className='deleteNoBtn me-2' onClick={onClose}>
                            아니오
                        </Button>
                        <Button variant='warning' className='deleteYesBtn' onClick={del}>
                            예
                        </Button>
                    </div>
                </Modal.Body>      
            </Modal>
        </>
    )
}

export default DeleteMemBtn