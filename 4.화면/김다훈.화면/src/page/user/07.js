import {useCallback, useEffect, useState} from "react"
import { Col, Row, Modal, Button} from "react-bootstrap"
import UserLayout from '../UserLayout'
import MyBackButton from '../navigation/02'
import UserCheckModal from "./UserCheckModal"
import {getUser, sendSMS, userDelete} from "../../api/userApi";
import {userUpdateAx} from "../../api/userApi";
import {useParams} from "react-router-dom";

/* USER.07 회원수정 */
const UserUpdate = () => {
    const [getUserVar, setGetUserVar] = useState({
        userId: '',
        userName: '',
        userPw: '',
        personalName:'',
        phoneNumber: '',
        birthDay: '',
        userEmail: '',
        checkSMS:''
    })

    const [userUpdate, setUserUpdate] = useState({
        userId: '',
        personalName:'',
        userName: '',
        userPw: '',
        birthDay: '',
        userEmail: '',
        phoneNumber: '',
        checkSMS:''
    })


    useEffect(() => {
        getUser(userId).then(response => {
            setGetUserVar(response)
        })
    }, [userUpdate])

    const test = userUpdate.personalName

    const {userId} = useParams();
    getUserVar.userId = userId
    userUpdate.userId = userId


    const onClickUpdate = () => {
        userUpdateAx(userUpdate).then((response) => {
            alert("회원정보가 수정되었습니다.")
        }).catch((error) => {
            console.log(error);
        });
    }

    const onClickDelete = useCallback(() => {
        userDelete(getUserVar.userId).then();
    },[getUserVar.userId])

    const onChange = e => {
        userUpdate[e.target.name] = e.target.value
        setUserUpdate({...userUpdate})
    }



    const [data, setData] = useState(null)
    // 적은 휴대폰번호를 담아서 백엔드에 보내주는 함수
    const onClickSendPhoneNumber = useCallback(() => sendSMS(userUpdate.phoneNumber).then(data => {
        setData(data)
        alert("인증번호를 발송하였습니다.")
    }), [userUpdate.phoneNumber]);

    const [isCheckSMS, setIsCheckSMS] = useState(false)
    const checkSMS = () => {
        if (data == userUpdate.checkSMS) {
            setIsCheckSMS(true)
            alert("휴대폰 인증이 정상적으로 완료되었습니다.")
        } else {
            console.log(userUpdate.checkSMS)
            console.log(data)
            alert("인증번호가 올바르지 않습니다.")
        }
    }

    const [userName, setUserName] = useState('')
    const [personalName, setPersonalName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [birthDay, setBirthDay] = useState('')

    const [userNameMessage, setUserNameMessage] = useState('')
    const [personalNameMessage, setPersonalNameMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [phoneNumberMessage, setPhoneNumberMessage] = useState('')
    const [birthDayMessage, setBirthDayMessage] = useState('')

    const [isUserName, setIsUserName] = useState(false)
    const [isPersonalName, setIsPersonalName] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isPhoneNumber, setIsPhoneNumber] = useState(false)
    const [isBirthDay, setIsBirthDay] = useState(false)


    const onChangeUserName = useCallback(e => {
        const userNameRegex = /^[a-zA-z0-9]{5,15}$/
        const userNameCurrent = e.target.value
        setUserName(userNameCurrent)

        if(!userNameRegex.test(userNameCurrent)) {
            setUserNameMessage('영문, 숫자 조합의 5자 이상 10자이내 형식을 맞춰주세요')
            setIsUserName(false)
        } else {
            setUserNameMessage('올바른 아이디 형식이에요 :)')
            setIsUserName(true)
        }
    }, []);

    // 이름
    const onChangePersonalName = useCallback(e => {
        setPersonalName(e.target.value)
        if (e.target.value.length < 2 || e.target.value.length > 5) {
            setPersonalNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
            setIsPersonalName(false)
        } else {
            setPersonalNameMessage('올바른 이름 형식입니다 :)')
            setIsPersonalName(true)
        }
    }, []) // dependency가 없으므로 이전에 사용하던 함수값을 그대로 사용

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

    // 이메일
    const onChangeEmail = useCallback(e => {
        const emailRegex = //정규표현식
            /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
        const emailCurrent = e.target.value
        setEmail(emailCurrent)

        if (!emailRegex.test(emailCurrent)) {
            setEmailMessage('(영어소문자/숫자)@(소문자).(소문자 2,3자)형식을 맞춰주세요.')
            setIsEmail(false)
        } else {
            setEmailMessage('올바른 이메일 형식이에요 :')
            setIsEmail(true)
        }
    }, [])

    const testPhoneNumber = getUserVar.phoneNumber
    // 휴대폰번호
    const onChangePhoneNumber = useCallback(e => {
        const phoneNumberRegex = /^[0-9]{10,11}$/ // 11자리의 숫자
        const phoneNumberCurrent = e.target.value
        setPhoneNumber(phoneNumberCurrent)

        if(!phoneNumberRegex.test(phoneNumberCurrent)) {
            setPhoneNumberMessage('10 ~ 11자리의 숫자로 입력해주세요.')
            setIsPhoneNumber(false)
            console.log(phoneNumberCurrent)
            console.log(testPhoneNumber)
        } else if(!(phoneNumberCurrent === getUserVar.phoneNumber)) {
            console.log(phoneNumberCurrent)
            console.log(testPhoneNumber)
            setPhoneNumberMessage('본인의 휴대폰이 아닙니다.')
            setIsPhoneNumber(false)
        }
        else {
            console.log(phoneNumberCurrent)
            console.log(testPhoneNumber)
            setPhoneNumberMessage('올바른 휴대폰번호입니다. :)')
            setIsPhoneNumber(true)
        }
    }, [getUserVar.phoneNumber])





    const onChangeBirthDay = useCallback(e => {
        const birthDayRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/ // 11자리의 숫자
        const birthDayCurrent = e.target.value
        setBirthDay(birthDayCurrent)

        if(!birthDayRegex.test(birthDayCurrent)) {
            setBirthDayMessage('YYYY-MM-DD 형식으로 8자 입력해주세요.')
            setIsBirthDay(false)
        } else {
            setBirthDayMessage('올바른 형식의 생년월일입니다. :)')
            setIsBirthDay(true)
        }
    }, [])


    // 모달관련
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <UserLayout>
            <MyBackButton pageName={'회원수정'}/>
                <Row>
                    <Col>
                        <form className='mt-4'>

                            <div className="mb-3 fw-bold">
                                <p>*변경할 아이디</p>
                                <input type="text" className="form-control" id="exampleInputUserName" name="userName"
                                       placeholder='아이디를 입력하세요.'
                                       onChange={(event) => {
                                           onChange(event);
                                           onChangeUserName(event);
                                       }}></input>

                                <Row className={'mt-3 ms-2'}>{userUpdate.userName.length > 0 &&
                                    <span className={`message ${isUserName ? 'success' : 'error'}`}>{userNameMessage}</span>}
                                </Row>
                            </div>
                            <div className="mb-3 fw-bold">
                                <p>*변경할 이름</p>
                                <input type="text" className="form-control" id="exampleInputUserName" name="personalName"
                                       placeholder='이름을 입력하세요.'
                                       onChange={(event) => {
                                           onChange(event);
                                           onChangePersonalName(event);
                                       }}></input>

                                <Row className={'mt-3 ms-2'}>{userUpdate.personalName.length > 0 &&
                                    <span className={`message ${isPersonalName ? 'success' : 'error'}`}>{personalNameMessage}</span>}
                                </Row>
                            </div>

                            <div className="mb-3 fw-bold">
                                <p>*변경할 생년월일</p>
                                <input type="text" className="form-control" id="exampleInputUserName" name="birthDay"
                                       placeholder='생년월일을 입력하세요.'
                                       onChange={(event) => {
                                           onChange(event);
                                           onChangeBirthDay(event);
                                       }}></input>

                                <Row className={'mt-3 ms-2'}>{userUpdate.birthDay.length > 0 &&
                                    <span className={`message ${isBirthDay ? 'success' : 'error'}`}>{birthDayMessage}</span>}
                                </Row>
                            </div>

                            <div className="mb-3 fw-bold">
                                <p>*재설정 비밀번호</p>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="userPw"
                                       placeholder='영문,숫자,한글 조합의 4~12자리로 입력해주세요.'
                                       onChange={(event) => {
                                           onChange(event);
                                           onChangePassword(event);
                                       }}></input>

                                <Row className={'mt-3 ms-2'}>{userUpdate.userPw.length > 0 &&
                                    <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>}
                                </Row>
                            </div>
                            <div className="mb-3 fw-bold">
                                <p>*재설정 비밀번호 확인</p>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder='영문,숫자,한글 조합의 4~12자리로 입력해주세요.' name="userPwConfirm"
                                       onChange={(event) => {
                                           onChange(event);
                                           onChangePasswordConfirm(event);
                                       }}></input>

                                <Row className={'mt-3 ms-2'}>
                                    <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
                                </Row>
                            </div>
                            <div className="mb-3 fw-bold">
                                <p>*변경할 이메일</p>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" name="userEmail"
                                       onChange={(event) => {
                                           onChange(event);
                                           onChangeEmail(event);
                                       }}></input>

                                <Row className={'mt-3 ms-2'}>{userUpdate.userEmail.length > 0 &&
                                    <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
                                </Row>

                            </div>
                            <div className="mb-3 fw-bold">
                                <p>*휴대번 번호 (회원탈퇴시 인증필요)</p>
                                <Row>
                                    <Col xs={9}>
                                        <input type="text" className="form-control" id="exampleInputPassword1" name="phoneNumber"
                                               onChange={(event) => {
                                                   onChange(event);
                                                   onChangePhoneNumber(event);
                                               }}></input>

                                        <Row className={'mt-3 ms-2'}>{userUpdate.phoneNumber.length > 0 &&
                                            <span className={`message ${isPhoneNumber ? 'success' : 'error'}`}>{phoneNumberMessage}</span>}
                                        </Row>
                                    </Col>
                                    <Col xs={3}>
                                        <Button variant={'warning'} onClick={onClickSendPhoneNumber} disabled={!(isPhoneNumber)}>인증번호 발송</Button>
                                    </Col>
                                </Row>
                            </div>
                            <div className="mb-3 fw-bold ">
                                <p>*인증 번호 (회원탈퇴시 인증필요)</p>
                                <Row>
                                    <Col xs={9}>
                                        <input type="text" className="form-control" id="exampleInputPassword1" name="checkSMS"
                                               onChange={onChange}></input>
                                    </Col>
                                    <Col xs={3}>
                                        <Button variant={'warning'} onClick={checkSMS}>인증 확인</Button>
                                    </Col>
                                </Row>
                                <p className="mt-3 text-center">*은 필수입력 사항입니다.</p>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Button className={'h-25 mt-2'}  variant={'warning'} href={'/userCompleteUpdate'}
                                        disabled={!(isPhoneNumber && isEmail && isPasswordConfirm && isPassword && isCheckSMS)}
                                        onClick={onClickUpdate}>변경저장</Button>
                                <Button variant="warning" onClick={handleShow} className="h-25 mt-2 ms-3"
                                        disabled={!(isPhoneNumber && isCheckSMS)}>
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
                                        <Button variant="warning" onClick={() => {
                                            handleClose();
                                            onClickDelete();
                                        }} href="/userCompleteDelete">
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