import UserLayout from "../UserLayout"
import {Col, Row, Form, Button} from "react-bootstrap"
import MyBackButton from "../navigation/02"
import UserCheckModal from "./UserCheckModal"
import {useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";
import {findUserPw, sendSMS} from "../../api/userApi";

const UserFindPw = () => {
    const [findUser, setFindUser] = useState({
        userName:'',
        userEmail:'',
        phoneNumber:'',
        checkSMS:''
    })

    const [isCertified, setIsCertified] = useState(false)

    const onChange = e => {
        findUser[e.target.name] = e.target.value
        setFindUser({...findUser})
    }

    const navigate = useNavigate()

    const toPasswordFix = () => navigate({
        pathname: `../userPwUpdate/${findUser.userName}`
    })

    const onClickUserFindPw = useCallback(() => {
        findUserPw(findUser).then(response => {
            if(response === 1){
                setIsCertified(true);
                alert("계정 확인 성공")
                // navigate('/userLogin');
            } else {
                alert("이름과 이메일, 휴대폰번호가 일치하지 않습니다.")
            }
        })
            .catch(error => {
                console.log(error);
            });
    }, [findUser])

    const [data, setData] = useState(null)
    // 적은 휴대폰번호를 담아서 백엔드에 보내주는 함수
    const onClickSendPhoneNumber = useCallback(() => sendSMS(findUser.phoneNumber).then(data => {
        const cerNum = data;
        setData(cerNum)
    }), [findUser.phoneNumber]);

    const checkSMS = () => {
        if (data == findUser.checkSMS) {
            console.log(findUser.checkSMS)
            console.log(data)
            alert("휴대폰 인증이 정상적으로 완료되었습니다.")
            toPasswordFix();
        } else {
            console.log(findUser.checkSMS)
            console.log(data)
            alert("인증번호가 올바르지 않습니다.")
        }
    }

    return (
        <UserLayout>
            <MyBackButton pageName={'비밀번호 찾기'}/>
            <Row className="mt-5">
                <Col>
                    <Row className="mt-5 ms-3 fs-5 fw-bold">
                        비밀번호 찾기
                    </Row>
                    <Row className="d-flex justify-content-center mt-4">
                        <Form.Control type="text" placeholder="아이디" name="userName" className="w-75" onChange={onChange}/>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Form.Control type="text" placeholder="이메일" name="userEmail" className="w-75 mt-3" onChange={onChange}/>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Form.Control type="text" placeholder="휴대폰번호" name="phoneNumber" className="w-75 mt-3" onChange={onChange}/>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Button onClick={onClickUserFindPw} className={'w-75 mt-3'}>계정확인</Button>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Button variant={'warning'} className={'w-75 mt-3'} disabled={!(isCertified)} onClick={() => {
                            onClickSendPhoneNumber();
                            alert("인증번호를 발송했습니다.");
                        }}>인증번호 발송</Button>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Form.Control type="text" placeholder="인증번호" name="checkSMS" className="w-75 mt-3" onChange={onChange}/>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Button variant="warning" className={'w-75 mt-3'} onClick={checkSMS} >인증번호 확인</Button>
                    </Row>
                </Col>
            </Row>
        </UserLayout>
    )

}

export default UserFindPw