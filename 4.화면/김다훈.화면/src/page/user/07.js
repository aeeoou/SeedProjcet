import {useCallback, useState} from "react"
import { Col, Row, Modal, Button} from "react-bootstrap"
import UserLayout from '../UserLayout'
import MyBackButton from '../navigation/02'
import UserCheckModal from "./UserCheckModal"
import {sendSMS} from "../../api/userApi";

/* USER.07 회원수정 */
const UserUpdate = ({children}) => {


    const [userUpdate, setUserUpdate] = useState({
        userId: '',
        userPw: '',
        userEmail: '',
        phoneNumber: '',
        checkSMS:''
    })

    const onClickUpdate = () => {
        userUpdateAx(userUpdate).then((response) => {
            alert("비밀번호가 변경되었습니다.")
        }).catch((error) => {
            console.log(error);
        });
    }

    const onChange = e => {
        userUpdate[e.target.name] = e.target.value
        setUserUpdate({...userUpdate})
    }

    const [data, setData] = useState(null)
    // 적은 휴대폰번호를 담아서 백엔드에 보내주는 함수
    const onClickSendPhoneNumber = useCallback(() => sendSMS(userUpdate.phoneNumber).then(data => {
        const cerNum = data;
        alert('cerNum:' + cerNum)
        setData(cerNum)
    }), [userUpdate.phoneNumber]);

    const checkSMS = () => {
        if (data === userUpdate.checkSMS) {
            console.log(userUpdate.checkSMS)
            console.log(data)
            alert("휴대폰 인증이 정상적으로 완료되었습니다.")
        } else {
            console.log(data)
            alert("인증번호가 올바르지 않습니다.")
        }
    }

    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)

    const [passwordMessage, setPasswordMessage] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')

    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const onChangePassword = useCallback(e => {
        const passwordRegex = /^[a-zA-z0-9ㄱ-ㅎ가-힣]{4,12}$/ // 영문, 숫자, 한글 조합 4~12자 이내
        const passwordCurrent = e.target.value
        setPassword(passwordCurrent)

        if(!passwordRegex.test(passwordCurrent)) {
            setPasswordMessage('영문,숫자,한글 조합의 4~12자리로 입력해주세요.')
            setIsPassword(false)
        } else {
            setPasswordMessage('안전한 비밀번호에요 :)')
            setIsPassword(true)
        }
    }, [])

    // 비밀번호 확인
    const onChangePasswordConfirm = useCallback(e => {
        const passwordConfirmCurrent = e.target.value
        setPasswordConfirm(passwordConfirmCurrent)

        if (password === passwordConfirmCurrent) {
            setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 :)')
            setIsPasswordConfirm(true)
        } else {
            setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요')
            setIsPasswordConfirm(false)
        }
    }, [password])


    // 모달관련
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
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder='영문,숫자,한글 조합의 4~12자리로 입력해주세요.' ></input>
                            </div>
                            <div className="mb-3 fw-bold">
                                <p>*비밀번호 확인</p>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder='영문,숫자,한글 조합의 4~12자리로 입력해주세요.' ></input>
                            </div>
                            <div className="mb-3 fw-bold">
                                <p>*이메일</p>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
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
                            </div>
                            <div className="mb-3 fw-bold">
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