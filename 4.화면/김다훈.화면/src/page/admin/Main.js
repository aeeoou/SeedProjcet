import {Row, Col, Container, Form} from 'react-bootstrap';
import AdminLayout from './AdminLayout';

const AdminMain = () => {
    return (
        <AdminLayout>
            <Container>
                <Row className='mb-2'>
                    <Col className='text-center'>
                        <div className='adminLogoImg'>
                            로고이미지
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-2">
                    <Col>
                        <Form.Group controlId="formFile" className="mb-2">
                            <Form.Control type="file" className="fileUploadButton" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className='fw-bold'>
                        메인이미지 변경
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} className='text-center'>
                        <div className='adminFoodImg'>
                            음식이미지
                        </div>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control type="file" className="fileUploadButton" />
                        </Form.Group>
                    </Col>
                    <Col xs={6} className='text-center'>
                        <div className='adminAdvertiseImg'>
                            광고이미지
                        </div>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control type="file" className="fileUploadButton" />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </AdminLayout>
    )
}

export default AdminMain;
