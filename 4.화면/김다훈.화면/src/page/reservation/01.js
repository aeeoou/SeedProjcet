import UserLayout from '../UserLayout';
import {Form, Row, Col, Button} from 'react-bootstrap';
import MyBackButton from '../navigation/02'
import { Link } from 'react-router-dom';

const ReservationCreate = () => {
    const reservations = [
        {reservationId: '1', restaurantName: '시골밥상', reservationDate: '2024-07-23'},
        {reservationId: '2', restaurantName: '명륜진사갈비 성남점', reservationDate: '2024-07-23'}
    ]

    return (
        <UserLayout>
            <Row>
                <Col>
                
                    <div>
                        <MyBackButton pageName={'예약추가'}/>
                    </div>
                    <div className='text-center d-flex justify-content-center mt-5'>
                        온라인 예약<br/>
                        방문 날짜와 인원을 입력해주세요.
                    </div>
                    <Form.Group className='mb-3 mt-3 d-flex justify-content-center' controlId='reservationDate'>
                        <Form.Label xs='4' id='reservationDate' className='me-3'>방문날짜</Form.Label>
                        <Col xs='6'>
                            <Form.Control type='date' className='h-5'/>
                        </Col>
                    </Form.Group>
                    <Form.Group className='mb-3 d-flex justify-content-center' controlId='people'>
                        <Form.Label xs='4' id='people' className='me-3'>방문인원</Form.Label>
                        <Col xs='6'>
                            <Form.Control type='number' className='h-5'/>
                        </Col>
                    </Form.Group>
                    <div className='text-center d-flex justify-content-center mt-3'>
                        시간을 선택해 주세요.
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Form.Select aria-label='reservationTime' className='flex text-center w-75'>
                            <option value='19:00'>19:00</option>
                            <option value='19:30'>19:30</option>
                            <option value='20:00'>20:00</option>
                        </Form.Select>
                    </div>
                    <div className='d-flex justify-content-center mt-2'>
                        <Link to={'/reservationRead'}>
                            <Button variant='warning' className='mb-3 mt-2'>예약하기</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </UserLayout>
    )
}

export default ReservationCreate