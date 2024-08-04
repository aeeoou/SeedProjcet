import UserLayout from "../UserLayout"
import { Col, Row, Button } from "react-bootstrap"

const UserCompleteSignUp = () => {
    return (
        <UserLayout>
            <Row className="mt-5">
                <Col>
                    <Row className="d-flex justify-content-center fs-3 fw-bold mt-5">회원 가입 완료<hr className="w-75 "/></Row>
                    <Row className="d-flex justify-content-center fs-5 mt-5">회원가입이 성공적으로 완료되었습니다.</Row>
                    <Row className="d-flex justify-content-center">
                        <Button variant="warning" href="/userLogin" className="mt-5 w-50">
                            로그인
                        </Button>
                    </Row>
                </Col>

            </Row>
        </UserLayout>
    )

}

export default UserCompleteSignUp