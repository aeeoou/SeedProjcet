import AdminLayout from '../AdminLayout';
import {Row, Col} from 'react-bootstrap';
import DelMemBtn from '../../admin/user/DelMemBtn';
import {CardText} from 'react-bootstrap-icons';
import {useState, useEffect, useCallback} from "react";
import {useParams} from "react-router-dom";
import {getUser, userDelete} from "../../../api/userApi";
import useTo from "../../useTo";
import Button from "react-bootstrap/Button";

const AdminUserList = () => {
    const {userId} = useParams()
    const {toList, page} = useTo()
    const [adminUser, setAdminUser] = useState({
        userId: 0,
        userName:'',
        personalName:'',
        phoneNumber:'',
        birthDay:'',
        userEmail:'',
    })

    useEffect(() => {
        getUser(userId).then(adminUser => setAdminUser(adminUser))
    }, [userId])

    const deleteUser = useCallback(() => {
        userDelete(userId).then()
        toList()
    }, [userId])

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
                            <td>{adminUser.userId}</td>
                        </tr>
                        <tr>
                            <th className='border' scope="col">이름</th>
                            <td>{adminUser.personalName}</td>
                        </tr>
                        <tr>
                            <th className='border' scope="col">전화번호</th>
                            <td>{adminUser.phoneNumber}</td>
                        </tr>
                        <tr>
                            <th className='border' scope="col">ID</th>
                            <td>{adminUser.userName}</td>
                        </tr>
                        <tr>
                            <th className='border' scope="col">생년월일</th>
                            <td>{adminUser.birthDay}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='d-flex justify-content-end'>
                <DelMemBtn del={deleteUser}/>
                <Button variant='warning' className='delMemBtn me-2' href={'/adminUser'}>목록</Button>
            </div>
        </AdminLayout>
    )
}

export default AdminUserList