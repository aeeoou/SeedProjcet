import AdminLayout from '../AdminLayout';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const AdminReservationDelComplete = () => {
    return (
        <AdminLayout>
            <div>
                <div className='mt-5 text-center fw-bolder'>
                    <h3 className='fw-bolder'>예약 삭제 완료</h3>
                    <hr style={{ width: '50%', margin: '0 auto' }}/>
                    <div className='my-5'>예약 삭제가 정상적으로 처리되었습니다.</div>
                </div>
                <div className='d-flex justify-content-center my-5'>
                    <Link to='/adminReservation' >
                        <Button className='btn btn-warning p-2 btn-sm w-100'
                            role='button'>예약목록화면 바로가기</Button>
                    </Link>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminReservationDelComplete