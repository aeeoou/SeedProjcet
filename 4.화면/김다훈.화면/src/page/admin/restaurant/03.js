import AdminLayout from '../AdminLayout'
import DelRestaurantModal from '../../admin/restaurant/DelRestaurantModal';
import {Link} from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const UpdateAdminRestaurant = () => {
    return(
        <AdminLayout>
             <Container>
                <Row className="justify-content-center mb-4">
                    <Col>
                        <div className="restaurantImageBox">식당이미지</div>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-4">
                    <Col>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control type="file" className="fileUploadButton" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="restaurantName">
                                <Form.Label>식당명</Form.Label>
                                <Form.Control type="text" defaultValue="명륜진사갈비 성남점" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="mainMenu">
                                <Form.Label>대표메뉴</Form.Label>
                                <Form.Control type="text" defaultValue="양념갈비" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="businessHours">
                                <Form.Label>영업시간</Form.Label>
                                <Form.Control type="text" defaultValue="오전 9:00 ~ 오후 9:00"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="price">
                                <Form.Label>가격</Form.Label>
                                <Form.Control type="text" defaultValue="18,900원"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>식당 소개</Form.Label>
                                <Form.Control as="textarea" rows={3} defaultValue="소개: 숯불을 원하는만큼 새롭게 갈아드립니다.!
                                    고기의 품질이 무한리필가게중에 제일 좋다고 자부합니다.
                                    손님이 드시는 음식을 제 자녀가 먹는다는 마음으로 준비합니다." />
                            </Form.Group>
                            <div className="d-flex justify-content-end">
                                <DelRestaurantModal/>
                                <Link to={'/adminRestaurant'}>
                                    <Button variant="warning" className="me-2">
                                        저장
                                    </Button>
                                </Link>
                                <Link to={'/adminRestaurant'}>
                                    <Button variant="warning">
                                        취소
                                    </Button>
                                </Link>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </AdminLayout>
    )
}

export default UpdateAdminRestaurant