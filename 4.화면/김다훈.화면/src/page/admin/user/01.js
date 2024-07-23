import AdminLayout from '../AdminLayout';
import {Link} from 'react-router-dom';
import {Form, InputGroup, Button} from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa';

const AdminUser = () => {
    return (
        <AdminLayout>
            <div>
                <div className='text-start fw-bold' style={{ fontSize: '20px' }}> 회원목록 </div>
                <div className='pt-3'>
                    <table className="table table-hover text-center">
                        <thead className='table-secondary'>
                            <tr>
                                <th scope="col">식별번호</th>
                                <th scope="col">이름</th>
                                <th scope="col">전화번호</th>
                                <th scope="col">ID</th>
                                <th scope="col">가입일</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <Link to={'/adminUserList'} className='link-dark'>
                                        1
                                    </Link>
                                </th>
                                <td>
                                    <Link to={'/adminUserList'} className='link-dark'>
                                        김다훈
                                    </Link>
                                </td>
                                <td>
                                    <Link to={'/adminUserList'} className='link-dark'>
                                        010-1111-1111
                                    </Link>
                                </td>
                                <td>
                                    <Link to={'/adminUserList'} className='link-dark'>
                                        dh1111
                                    </Link>
                                </td>
                                <td>
                                    <Link to={'/adminUserList'} className='link-dark'>
                                        2024-01-01
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>한성목</td>
                                <td>010-2222-2222</td>
                                <td>sm2222</td>
                                <td>2024-02-02</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>송동현</td>
                                <td>010-3333-3333</td>
                                <td>dh3333</td>
                                <td>2024-03-03</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>유종은</td>
                                <td>010-4444-4444</td>
                                <td>je4444</td>
                                <td>2024-04-04</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>서형종</td>
                                <td>010-5555-5555</td>
                                <td>hj5555</td>
                                <td>2024-05-05</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* 부트스트랩 페이지네이션 (비동기처리 해야함)*/}
                <nav aria-label="Page navigation example" className='d-flex justify-content-center p-4'>
                    <ul class="pagination" id='paging'>
                        <li class="page-item" id='paging'>
                            <a class="page-link" href="#" aria-label="Previous" id='paging'>
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#" id='paging'>1</a></li>
                        <li class="page-item"><a class="page-link" href="#" id='paging'>2</a></li>
                        <li class="page-item"><a class="page-link" href="#" id='paging'>3</a></li>
                        <li class="page-item"><a class="page-link" href="#" id='paging'>4</a></li>
                        <li class="page-item"><a class="page-link" href="#" id='paging'>5</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next" id='paging'>
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="searchContainer">
                    <Form.Select className="searchSelect">
                        <option>제목</option>
                        <option>식별번호</option>
                        <option>이름</option>
                        <option>ID</option>
                    </Form.Select>
                    <InputGroup>
                        <Form.Control type="text" placeholder="검색어를 입력하세요" />
                        <Button variant="outlineSecondary">
                            <FaSearch />
                        </Button>
                    </InputGroup>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminUser