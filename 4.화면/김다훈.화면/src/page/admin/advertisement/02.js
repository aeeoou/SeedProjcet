import AdminLayout from '../AdminLayout';
import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminAdvertisementCreate = () => {
    const [file, setFile] = useState(null);
    const [restaurantName, setRestaurantName] = useState('');
    const [advertisementContent, setAdvertisementContent] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('restaurantName', restaurantName);
        formData.append('advertisementContent', advertisementContent);

        try {
            const response = await axios.post('/api/advertisement', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('There was an error uploading the file!', error);
        }
    };

    return (
        <>
            <AdminLayout>
                <div>
                    <main>
                        <div className='text-start'>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="식당명을 입력하세요."
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                    value={restaurantName}
                                    onChange={(e) => setRestaurantName(e.target.value)}
                                />
                            </div>
                            <div>2024-07-19 00:00:00</div>
                        </div>
                        <hr />
                        <div className='border mb-4 p-4 d-flex align-items-center justify-content-center fs-3 fw-bold h-50' style={{ height: '150px' }}>
                            식당이미지
                        </div>
                        <Row className="justify-content-center mb-4">
                            <Col>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Control type="file" className="fileUploadButton" onChange={handleFileChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="advertisement">
                            <Form.Control
                                as="textarea"
                                rows={10}
                                placeholder="광고글을 작성하세요"
                                value={advertisementContent}
                                onChange={(e) => setAdvertisementContent(e.target.value)}
                            />
                        </Form.Group>
                        <div className='p-1 mt-1'>
                            이 게시물은 (주)맛있당에 관리 권한이 있음.
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Button
                                className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm'
                                onClick={handleSubmit}
                                style={{ background: 'orange' }}
                            >
                                등록
                            </Button>
                            <Link to='/adminAdvertisement' className='d-block'>
                                <a className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm' style={{ background: 'orange' }}>취소</a>
                            </Link>
                        </div>
                    </main>
                </div>
            </AdminLayout>
        </>
    );
};

export default AdminAdvertisementCreate;