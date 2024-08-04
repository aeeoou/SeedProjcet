import AdminLayout from '../AdminLayout'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const AdminRestaurantCreate = () => {
    return(
        <AdminLayout>
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col>
                        <div className="restaurantImageBox"> 식당이미지 </div>
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
                                <Form.Control type="text" placeholder="식당 이름을 입력하세요" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="mainMenu">
                                <Form.Label>대표메뉴</Form.Label>
                                <Form.Control type="text" placeholder="대표 메뉴를 입력하세요" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="businessHours">
                                <Form.Label>영업시간</Form.Label>
                                <Form.Control type="text" placeholder="영업 시간을 입력하세요" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="price">
                                <Form.Label>가격</Form.Label>
                                <Form.Control type="text" placeholder="가격을 입력하세요" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>식당 소개</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="식당 소개를 입력하세요" />
                            </Form.Group>
                            <div className="d-flex justify-content-end">
                                <Button variant="warning" type="submit" className="submitButton me-2" href='/adminRestaurant'>
                                    추가
                                </Button>
                                <a href='/adminRestaurant'>
                                    <Button variant="warning" className="cancelButton">
                                        취소
                                    </Button>
                                </a>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </AdminLayout>
    )
}

export default AdminRestaurantCreate