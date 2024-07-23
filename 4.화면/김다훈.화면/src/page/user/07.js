import { useState } from "react"
import { Col, Row, Modal, Button} from "react-bootstrap"
import UserLayout from '../UserLayout'
import MyBackButton from '../navigation/02'
import UserCheckModal from "./UserCheckModal"

/* USER.07 회원수정 */
const UserUpdate = ({children}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <UserLayout>
            <MyBackButton pageName={'회원수정'}/>
                <Row>
                    <Col>
                        {children}
                        <form className='mt-4'>
                            <div className='my-5'>
                                <p className='fw-bold'> 아이디: user </p>
                                <p className='fw-bold'> 이름: 김다훈 </p>
                                <p className='fw-bold'> 생년월일: 1995-06-15</p>
                            </div>
                            <div className="mb-3 fw-bold">
                                <p>*비밀번호</p>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder='6~12자리의 영문, 숫자' ></input>
                                <p>*비밀번호 확인</p>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder='6~12자리의 영문, 숫자' ></input>
                            </div>
                            <div className="mb-3 fw-bold">
                                <p>*이메일</p>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='6~12자리의 영문, 숫자'></input>
                            </div>
                            <div className="mb-3 fw-bold">
                                <p>휴대번 번호</p>
                                <Row>
                                    <Col xs={9}>
                                        <input type="text" class="form-control" id="exampleInputPassword1"  ></input>
                                    </Col>
                                    <Col xs={3}>
                                        <UserCheckModal btnName={'인증'} modalBody={'인증번호를 발송했습니다.'}/>
                                    </Col>
                                </Row>
                                <p>인증 번호</p>
                                <Row>
                                    <Col xs={9}>
                                        <input type="text" class="form-control" id="exampleInputPassword1"  ></input>
                                    </Col>
                                    <Col xs={3}>
                                        <UserCheckModal btnName={'확인'} modalBody={'인증되었습니다.'}/>
                                    </Col>
                                </Row>
                                <p className="mt-3 text-center">*은 필수입력 사항입니다.</p>
                            </div>
                            <div className='d-flex justify-content-center'>

                            <UserCheckModal btnName={'확인'} btnWidth={'h-25 mt-2'} completeBtn={'/userCompleteUpdate'} modalBody={'수정이 완료되었습니다.'}/>
                            <Button variant="warning" onClick={handleShow} className="h-25 mt-2 ms-3">
                                회원 탈퇴
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>회원탈퇴</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>회원을 탈퇴하시겠습니까?</Modal.Body>
                                <Modal.Footer>
                                <Button variant="warning" onClick={handleClose}>
                                    아니오
                                </Button>
                                <Button variant="warning" onClick={handleClose} href="/userCompleteDelete">
                                    예
                                </Button>
                                </Modal.Footer>
                            </Modal>
                            </div>
                        </form>
                    </Col>
                </Row>
        </UserLayout>
    )
}

export default UserUpdate