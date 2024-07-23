import UserLayout from '../UserLayout';
import MyBackButton from '../navigation/02';
import {Row, Col, Card} from 'react-bootstrap';
import ReservationModal from './ReservationModal';


const ReservationRead = () => {

    return (
        <UserLayout>
            <div>
                <MyBackButton pageName={'예약조회'}/>
            </div>
            <Card className='mt-5 mb-5 border border-0'>
                <Row className='no-gutters'>
                    <Col>
                        <div className='restaurant-img text-center'>
                            <div className='restaurant-text'>식당이미지</div>
                        </div>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Text className='me-5'>
                                예약번호: 2<br/>
                                식당명: 명륜진사갈비 성남점<br/>
                                금액: 13,000원<br/>
                                인원수: 4명<br/>
                                예약일: 2024-07-23
                                예약시간: 19:00
                            </Card.Text>
                            <div className='d-flex justify-content-end'>
                                <ReservationModal/>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </UserLayout>
    )
}

export default ReservationRead