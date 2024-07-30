import {Link} from 'react-router-dom'
import {Row, Col, Button, Dropdown} from 'react-bootstrap'
import {BellFill, XLg} from 'react-bootstrap-icons';
import NavOffcanvas from './navigation/01'

const Header = () => {

    let sessionStorage = window.sessionStorage;

    return (
        <header>
            <Row id='header'>
                <Col>
                    <Row>
                        <Col xs={4}></Col>
                        <Col className='d-flex align-items-center justify-content-center' xs={4}>
                            <Link to={'/'} id='deleteLinkCss'>
                                <div className='logo_img bg-light d-flex align-items-center justify-content-center text-center'>
                                    로고이미지
                                </div>
                            </Link>
                        </Col>
                        <Col className='mt-3' xs={4}>
                            <div className="float-end d-flex align-items-center justify-content-center">

                            {sessionStorage.getItem("user_id") ? (
                                <>
                                    <div className="fw-bold me-1 ID">{sessionStorage.getItem("user_id")}님</div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <BellFill className="fs-3 me-2"/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="border border-dark">
                                            <Dropdown.Item href="#/action-1" id='dropDown' className="border-bottom border-dark d-flex">
                                                <p >회원님의 예약이 취소되었습니다.</p><XLg className="float-end fs-4 ms-2 mt-1"/>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-1" id='dropDown' className="border-bottom border-dark d-flex">
                                                
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-1" id='dropDown' className="d-flex">
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </>
                                    ):(<Button className='me-1'id='login' href='/userLogin'>로그인</Button>)}              
                                <NavOffcanvas/>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </header>
    )
}



export default Header