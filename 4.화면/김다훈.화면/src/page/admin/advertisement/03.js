import AdminLayout from '../AdminLayout';
import DelAdBtn from '../../admin/advertisement/DelAdBtn';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const AdminAdvertisementUpdate = () => {
    const advertisements = [
        { id: 1, restaurantName: '명륜진사갈비 성남점', writtenDate: '2024-01-01 00:00:00', 
            content: `무한리필 식당의 고기는 저렴하기때문에 품질이 안좋을 거라는 인식!저희 가게에서 앞장서서 뜯어고치려 합니다.\n\n혹시라도 안좋은 품질을 경험해서 다시는 가고싶지 않다던 손님들도 저희 식당을 경험하면 늘 5점 별점을 주시고는 하셨습니다.\n다른 말 더 이상 하지않겠습니다. 오셔서 한번 경험해주십시오!\n그리고 평가해주세요! 저희 정말 자신있습니다.` },
        { id: 2, restaurantName: '시골밥상', writtenDate: '2024-02-02 00:00:00', content: 'bbb' },
        { id: 3, restaurantName: '김삼보', writtenDate: '2024-03-03 00:00:00', content: 'ccc' },
        { id: 4, restaurantName: '돼지불고기', writtenDate: '2024-04-04 00:00:00', content: 'ddd' },
    ];

    const { id } = useParams();
    const advertisementId = parseInt(id, 10);
    const advertisement = advertisements.find(ad => ad.id === advertisementId);

    if (!advertisement) {
        return <div>Advertisement not found</div>;
    }

    return (
        <>
            <AdminLayout>
                <div className='mt-5'>
                    <div className='text-start'>
                        <div className="mb-2">
                            <input type="text"
                                className="form-control fs-4 fw-bold w-75"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                defaultValue={advertisement.restaurantName}
                            />
                        </div>
                        <div>{advertisement.writtenDate}</div>
                    </div>
                    <hr />
                    <div className='border mb-4 h-50 p-4 d-flex align-items-center justify-content-center text-center fs-3 fw-bold' style={{ height: '150px' }}>
                        식당이미지
                    </div>
                    <Row className="justify-content-center mb-4">
                        <Col>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control type="file" className="fileUploadButton" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="advertisement">
                        <Form.Control as="textarea" rows={10} defaultValue={advertisement.content}>
                        </Form.Control>
                    </Form.Group>
                    <div className='p-1 mt-1'>
                        저작권자 씨앗미디어(주) 무단전재 및 재배포 금지
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <Link to='/adminAdvertisement' className='d-block me-2'>
                            <Button variant='warning' className='fixAdBtn'>수정</Button>
                        </Link>
                        <DelAdBtn/>
                        <Link to='/adminAdvertisement' className='d-block'>
                            <Button variant='warning' className='backtoAdList'>취소</Button>
                        </Link>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default AdminAdvertisementUpdate;
