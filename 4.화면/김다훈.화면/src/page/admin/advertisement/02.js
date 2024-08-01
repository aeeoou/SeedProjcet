import AdminLayout from '../AdminLayout';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminAdvertisementCreate = () => {
    const [restaurantName, setRestaurantName] = useState('');
    const [advertisementTitle, setAdvertisementTitle] = useState('');
    const [advertisementContent, setAdvertisementContent] = useState('');
    const [advertisementImage, setAdvertisementImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null); // Add state for image URL
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('restaurantName', restaurantName);
        formData.append('advertisementTitle', advertisementTitle);
        formData.append('advertisementContent', advertisementContent);
        if (advertisementImage) {
            formData.append('advertisementImage', advertisementImage);
        }

        try {
            const response = await axios.post('http://localhost:8000/advertisement/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            setImageUrl(response.data.imageUrl); // Update state with image URL
            navigate('/adminAdvertisement');
        } catch (error) {
            console.error('There was an error saving the advertisement!', error);
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
                                    value={restaurantName}
                                    onChange={(e) => setRestaurantName(e.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="광고 제목을 입력하세요."
                                    value={advertisementTitle}
                                    onChange={(e) => setAdvertisementTitle(e.target.value)}
                                />
                            </div>
                        </div>
                        <hr/>
                        <div className='border mb-4 p-4 d-flex align-items-center justify-content-center fs-3 fw-bold h-50' style={{height: '150px'}}>
                            {imageUrl ? <img src={imageUrl} alt="Advertisement" style={{ maxHeight: '150px', maxWidth: '100%' }} /> : '식당이미지'}
                        </div>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control
                                type="file"
                                className="fileUploadButton"
                                onChange={(e) => setAdvertisementImage(e.target.files[0])}
                            />
                        </Form.Group>
                        <hr/>
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
                                style={{background: 'orange'}}
                            >
                                등록
                            </Button>
                            <Link to='/adminAdvertisement' className='d-block'>
                                <Button
                                    className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm'
                                    style={{background: 'orange'}}
                                >
                                    취소
                                </Button>
                            </Link>
                        </div>
                    </main>
                </div>
            </AdminLayout>
        </>
    );
};

export default AdminAdvertisementCreate;