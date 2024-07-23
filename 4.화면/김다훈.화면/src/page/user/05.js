import UserLayout from "../UserLayout"
import { Col, Row, Form } from "react-bootstrap"
import MyBackButton from "../navigation/02"
import UserCheckModal from "./UserCheckModal"

const UserFindPw = () => {
    return (
        <UserLayout>
            <MyBackButton pageName={'비밀번호 찾기'}/>
            <Row className="mt-5">
                <Col>
                    <Row className="mt-5 ms-3 fs-5 fw-bold">
                        비밀번호 찾기
                    </Row>
                    <Row className="d-flex justify-content-center mt-4">
                        <Form.Control type="text" placeholder="아이디" className="w-75"/>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Form.Control type="text" placeholder="이메일" className="w-75 mt-3"/>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <UserCheckModal btnName={'인증번호 발송'} btnWidth={'w-75 mt-3'} modalBody={'인증번호를 발송했습니다.'}/>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Form.Control type="text" placeholder="인증번호" className="w-75 mt-3"/>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <UserCheckModal btnName={'인증번호 확인'} btnWidth={'w-75 mt-3'} modalBody={'인증되었습니다.'} completeBtn={'/userPwUpdate'}/>
                    </Row>
                </Col>
            </Row>
        </UserLayout>
    )

}

export default UserFindPw