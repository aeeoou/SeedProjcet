import AdminLayout from '../AdminLayout';
import { Link } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const AdminAdList = () => {
    const advertisements = [
        { id: 1, restaurantName: '명륜진사갈비', writtenDate: '2024-01-01' },
        { id: 2, restaurantName: '시골밥상', writtenDate: '2024-02-02' },
        { id: 3, restaurantName: '김삼보', writtenDate: '2024-03-03' },
        { id: 4, restaurantName: '돼지불고기', writtenDate: '2024-04-04' },
    ];

    return (
        <>
            <AdminLayout>
                <div className='me-4 ms-2'>
                    <div className='text-start fw-bold' style={{ fontSize: '20px' }}> 광고목록 </div>
                    <div className='pt-3'>
                        <table className="table table-hover text-center">
                            <thead className='table-secondary'>
                                <tr>
                                    <th scope="col">식별번호</th>
                                    <th scope="col">식당명</th>
                                    <th scope="col">작성일</th>
                                </tr>
                            </thead>
                            <tbody>
                                {advertisements.map((advertisement) => (
                                    <tr key={advertisement.id}>
                                        <th scope='row'>
                                            <Link to={`/adminAdvertisementUpdate/${advertisement.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                {advertisement.id}
                                            </Link>
                                        </th>
                                        <td>
                                            <Link to={`/adminAdvertisementUpdate/${advertisement.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                {advertisement.restaurantName}
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={`/adminAdvertisementUpdate/${advertisement.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                {advertisement.writtenDate}
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <nav aria-label="Page navigation example" className='d-flex justify-content-center p-4' >
                        <ul class="pagination" id='paging'>
                            <li class="page-item" id='paging' >
                                <a class="page-link" aria-label="Previous" id='paging'>
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item" ><a class="page-link" href="#" id='paging'>1</a></li>
                            <li class="page-item"><a class="page-link" href="#" id='paging'>2</a></li>
                            <li class="page-item"><a class="page-link" href="#" id='paging'>3</a></li>
                            <li class="page-item"><a class="page-link" href="#" id='paging'>4</a></li>
                            <li class="page-item"><a class="page-link" href="#" id='paging'>5</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next" id='paging'>
                                    <span aria-hidden="true" >&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className='searchContainer'>
                        <Form.Select className="searchSelect">
                            <option>선택</option>
                            <option>식별번호</option>
                            <option>식당명</option>
                            <option>작성일</option>
                        </Form.Select>
                        <InputGroup>
                            <Form.Control type="text" placeholder="검색어를 입력하세요" />
                            <Button variant="outlineSecondary">
                                <FaSearch />
                            </Button>
                        </InputGroup>
                    </div>
                    <div className='d-flex justify-content-end mb-5'>
                        <Link to='/adminAdvertisementCreate' className='d-block'>
                            <a className='btn btn-primary btn-outline-warning p-2 btn-sm'
                                href='#'
                                role='button'
                                style={{ background: 'orange' }}>광고 작성</a>
                        </Link>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default AdminAdList;
