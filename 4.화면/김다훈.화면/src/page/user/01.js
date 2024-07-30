import {useState, useCallback, useEffect} from "react"
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import {ChevronLeft} from 'react-bootstrap-icons';
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import { userLogins } from "../../api/userApi";
import {useCookies} from "react-cookie";


const UserLogin = () => {
    const navigate = useNavigate(); //변수 할당시켜서 사용
    const onClickBtn = () => {
        navigate('/'); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
    };

    const [userLogin, setUserLogin] = useState({ //컴포넌트의 상태를 간편하게 생성하고 업데이트 해주는 도구를 제공해준다.
        userId: '',
        userPw: '',
    })

    const onChange = e => {
        userLogin[e.target.name] = e.target.value
        setUserLogin({...userLogin})
    }

    // useCallback : 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용한다.
    const onClickUserLogin = useCallback(() => {
        userLogins(userLogin).then(response => {
            console.log(response)
            console.log("response.userId :", response.userId)
            console.log("response.userPw :", response.userPw)
            if(response.userId == undefined) {
                alert("입력하신 id가 일치하지 않습니다.");
            } else if(response.userPw == null) {
                console.log(response.userPw);
                alert("입력하신 비밀번호가 일치하지 않습니다.");
            } else if(response.userId === userLogin.userId) {
                // id, pw 모두 일치
                alert("로그인에 성공하셨습니다.")
                let sessionStorage = window.sessionStorage;
                sessionStorage.setItem("user_id", userLogin.userId);
                sessionStorage.setItem("user_pw", userLogin.userPw);

            }
            // 작업 완료 되면 페이지 이동(새로고침)
            navigate('/');
        })
            .catch(error => {
                alert("입력하신 로그인정보가 맞지않습니다.")
                window.location.reload();
            });
    }, [userLogin])

    // 쿠기(아이디 저장)

    //아이디 기억하기
    const [isRemember, setIsRemember] = useState(false); //아이디 저장 체크여부
    const [cookies, setCookie, removeCookie] = useCookies(["rememberUserId"]); //쿠키이름

    useEffect(() => { //페이지가 최초 렌더링 될 경우
        if(cookies.rememberUserId !== undefined) {
            setUserLogin({ ...userLogin, userId: cookies.rememberUserId }); // userLogin에 저장된 쿠키아이디 셋팅
            setIsRemember(true);
        }
    }, []);

    const cookieHandleOnChange = (e) => {
        //체크박스 상태 업데이트
        setIsRemember(e.target.checked);
        if (e.target.checked) {
            // 쿠키에 userId 값 저장, 유효기간 200초
            setCookie("rememberUserId", userLogin.userId, {maxAge: 2000});
        } else {
            //체크 안 되어 있으면 쿠키 삭제
            removeCookie("rememberUserId");
        }
    };

    return (
        <Container id='loginContainer' className='border border-dark'>
            <Row className='text-center mt-4'>
                <Col>
                    <Row>
                        <Col className='mt-3 d-flex'>
                            <ChevronLeft onClick={onClickBtn}/>
                        </Col>
                        <Col className='loginText mt-4'>
                            <p>로그인</p>
                        </Col>
                    </Row>
                    <Row>
                        <p>맛있당의 회원이 되어 다양한 서비스를 누리세요!</p>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Form>
                    <Form.Group className="mb-3 mt-3"  controlId="formGroupEmail">
                        <Form.Label>ID</Form.Label>
                        <Form.Control name='userId' type="text" placeholder="아이디를 입력하세요." className='h-25'
                                      onChange={onChange}
                                      defaultValue={userLogin.userId}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label><p className='float-end'></p>
                        <Form.Control name='userPw' type="password" placeholder="비밀번호를 입력하세요." className='h-25'
                                      onChange={onChange}/>
                    </Form.Group>
                    <Row>
                        <Col>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="아이디저장"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                        onChange={cookieHandleOnChange}
                                        checked={isRemember}
                                    />
                                </div>
                            ))}
                        </Col>
                        <Col>

                            <Link to={'/userFindId'} id='deleteLinkCss'>
                                <p className='d-inline'>아이디 찾기</p>
                            </Link>
                            <Link to={'/userFindPw'} id='deleteLinkCss'>
                                <p className='d-inline ms-2'>비밀번호 찾기</p>
                            </Link>
                        </Col>
                    </Row>
                </Form>
            </Row>
            <Row className='gap-3 mx-2 mb-5'>
                <Button variant='warning' size='lg' className='loginBtn mt-5 border border-dark'
                        onClick={onClickUserLogin}>로그인</Button>{' '}
                <Button variant='warning' size='lg' className='loginUpBtn border border-dark btn' href='/userSignUp'>회원가입</Button>{' '}
                <Button variant='warning' size='lg' className='loginUpBtn border border-dark btn' href='/adminMain'
                        onClick={ () => {
                            // sessionStorage.setItem("loginId", loginId);
                            // sessionStorage.setItem("loginPassword", loginPassword);
                            //
                            // setSavedLoginId(sessionStorage.getItem("loginId"));
                            // setSavedLoginPassword(sessionStorage.getItem("loginPassword"));
                        }}>관리자로그인</Button>{' '}
            </Row>
        </Container>
    )
}

export default UserLogin