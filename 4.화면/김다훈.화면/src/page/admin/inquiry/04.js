import AdminLayout from '../AdminLayout';
import { Link } from 'react-router-dom'

const AdminAnswerDelComplete = () => {
    return (
        <AdminLayout>
            <div>
                <div className='mt-5 text-center fw-bolder'>
                    <h3 className='fw-bolder'>답변 삭제 완료</h3>
                    <hr style={{ width: '50%', margin: '0 auto' }}/>
                    <div className='my-5'>답변 삭제가 정상적으로 처리되었습니다.</div>
                </div>
                <div className='d-flex justify-content-center my-5'>
                    <Link to='/adminAnswer' className='d-block'>
                        <a className='btn btn-primary btn-outline-warning p-2 btn-sm'
                            href='#'
                            role='button'>답변목록화면 바로가기</a>
                    </Link>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminAnswerDelComplete