import UserLayout from "../UserLayout"
import { Col, Row, Form } from "react-bootstrap"
import MyBackButton from "../navigation/02"
import UserCheckModal from "./UserCheckModal"

const UserFindId = () => {
    return (
        <UserLayout>
            <MyBackButton pageName={'아이디 찾기'}/>
            <Row className="mt-5">
                <Col>
                    <Row className="mt-5 ms-3 fs-5 fw-bold">
                        아이디 찾기
                    </Row>
                    <Row className="d-flex justify-content-center mt-4">
                        <Form.Control type="text" placeholder="이름" className="w-75"/>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Form.Control type="text" placeholder="이메일" className="w-75 mt-3"/>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <UserCheckModal btnName={'아이디 찾기'} btnWidth={'w-75 mt-3'} completeBtn={'/userLogin'} modalBody={'회원님의 아이디는 user입니다.'}/>
                    </Row>
                </Col>
            </Row>
        </UserLayout>
    )

}

export default UserFindId