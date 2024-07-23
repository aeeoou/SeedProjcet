import AdminLayout from '../AdminLayout';
import {Row, Col} from 'react-bootstrap';
import DelMemBtn from '../../admin/user/DelMemBtn';
import {CardText} from 'react-bootstrap-icons';

const AdminUserList = () => {
    return (
        <AdminLayout>
            <Row >
                <Col className='d-flex align-items-end justify-content-start'>
                    <CardText className='fs-1'/>
                    <div className='mt-5 ms-3 fw-bold' style={{ fontSize: '20px' }}> 회원 조회 </div>
                </Col>
                
            </Row>
            
            <div className='pt-3'>
                <table className="table border table-hover">
                    <tbody>
                        <tr>
                            <th className='border' scope="col">식별번호</th>
                            <td>1</td>
                        </tr>
                        <tr>
                            <th className='border' scope="col">이름</th>
                            <td>김다훈</td>
                        </tr>
                        <tr>
                            <th className='border' scope="col">전화번호</th>
                            <td>010-1111-1111</td>
                        </tr>
                        <tr>
                            <th className='border' scope="col">ID</th>
                            <td>dh1111</td>
                        </tr>
                        <tr>
                            <th className='border' scope="col">가입일</th>
                            <td>2024-01-01</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='d-flex justify-content-end'>
                <DelMemBtn/>
            </div>
        </AdminLayout>
    )
}

export default AdminUserList