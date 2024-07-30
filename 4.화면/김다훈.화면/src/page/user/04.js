import UserLayout from "../UserLayout"
import { Col, Row, Form, Button} from "react-bootstrap"
import MyBackButton from "../navigation/02"
import UserCheckModal from "./UserCheckModal"
import {useCallback, useState} from "react";
import {findUserId} from "../../api/userApi";
import {useNavigate} from "react-router-dom";


const UserFindId = () => {
    const [findUser, setFindUser] = useState({
        userId: '',
        userName:'',
        userEmail:'',
    })

    const navigate = useNavigate()

    const onClickUserFindId = useCallback(() => {
        findUserId(findUser).then(response => {
            console.log(response)
            console.log("response.userName :", response.userName)
            console.log("response.userEmail :", response.email)
            if(response.userName == undefined) {
                alert("입력하신 이름이 일치하지 않습니다.");
            } else if(response.userEmail == null) {
                console.log(response.userEmail);
                alert("입력하신 이메일이 일치하지 않습니다.");
            } else if(response.userName === findUser.userName) {
                // id, email 모두 일치
                alert(`아이디는 ${response.userId} 입니다.`)
            }
            // 작업 완료 되면 페이지 이동(새로고침)
            navigate('/userFindId');
        })
            .catch(error => {
                alert("입력하신 정보가 맞지않습니다.")
                // window.location.reload();
            });
    }, [findUser])

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
                        <Button onClick={onClickUserFindId} className={'w-75 mt-3'}>
                            아이디 찾기
                        </Button>
                    </Row>
                </Col>
            </Row>
        </UserLayout>
    )

}

export default UserFindId