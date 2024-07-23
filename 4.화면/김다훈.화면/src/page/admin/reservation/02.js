import AdminLayout from '../AdminLayout';
import AdminDelReservation from '../reservation/AdminDelReservation';
import {useParams} from 'react-router-dom';
import {Col, Row, Card, Button, Container} from 'react-bootstrap';

const AdminReservationRead = () => {
    const reservations = [
        {reservationId: '1', reservationDate: '2024-07-11', price: 16000, restaurantName: '김삼보', people: 2},
        {reservationId: '2', reservationDate: '2024-07-11', price: 12000, restaurantName: '시골밥상', people: 1},
        {reservationId: '3', reservationDate: '2024-07-11', price: 16000, restaurantName: '명륜진사갈비', people: 2},
        {reservationId: '4', reservationDate: '2024-07-11', price: 12000, restaurantName: '락궁', people: 2},
        {reservationId: '5', reservationDate: '2024-07-11', price: 8000, restaurantName: '천지천', people: 1},
        {reservationId: '6', reservationDate: '2024-07-11', price: 23000, restaurantName: '비룡각', people: 4},
        {reservationId: '7', reservationDate: '2024-07-10', price: 16000, restaurantName: '탕후루', people: 3}
    ]

    const {reservationId} = useParams();
    const reservation = reservations.find(reservation => reservation.reservationId === reservationId);

    if(!reservation) {
        return <div>Reservation not found.</div>
    }

    return (
        <AdminLayout>
            <Container className='mb-5'>
                <div className='text-center' style={{ fontSize: '20px' }}> 예약 조회 </div>
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
                                    예약번호: {reservation.reservationId}<br/>
                                    식당명: {reservation.restaurantName}<br/>
                                    금액: {reservation.price}원<br/>
                                    인원수: {reservation.people}명<br/>
                                    예약일: {reservation.reservationDate}
                                </Card.Text>
                                    <div className='d-flex'>
                                        <AdminDelReservation title={'예약삭제완료'}/>
                                        <a href='/adminReservation'>
                                            <Button variant='warning' className='reservationListBtn me-2'>취소</Button>
                                        </a>
                                    </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </AdminLayout>
    )
}

export default AdminReservationRead