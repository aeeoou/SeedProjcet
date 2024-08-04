import AdminLayout from '../AdminLayout'
import {Link} from 'react-router-dom';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const AdminRestaurant = () => {
    return(
        <AdminLayout>
            <div className="restaurantListContainer">
                <div className='text-start fw-bold' style={{ fontSize: '20px' }}> 식당목록 </div>
                <div className='pt-3'>
                    <table className='text-center table table-hover'>
                        <thead className='table-secondary'>
                            <tr>
                                <th>식별번호</th>
                                <th>업소명</th>
                                <th>주소</th>
                                <th>음식 종류</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope='row'>
                                <Link to={'/adminRestaurantUpdate'} className='link-dark'>
                                    1
                                </Link>
                                </th>
                                <td>
                                <Link to={'/adminRestaurantUpdate'} className='link-dark'>
                                    명륜진사갈비
                                </Link>
                                </td>
                                <td>
                                <Link to={'/adminRestaurantUpdate'} className='link-dark'>
                                    성남시 분당구
                                </Link>
                                </td>
                                <td>
                                <Link to={'/adminRestaurantUpdate'} className='link-dark'>
                                    한식
                                </Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope='row'>2</th>
                                <td>김삼보</td>
                                <td>서울시 동작구</td>
                                <td>한식</td>
                            </tr>
                            <tr>
                                <th scope='row'>3</th>
                                <td>낙원</td>
                                <td>서울시 도봉구</td>
                                <td>디저트</td>
                            </tr>
                            <tr>
                                <th scope='row'>4</th>
                                <td>한강</td>
                                <td>서울시 강남구</td>
                                <td>디저트</td>
                            </tr>
                            <tr>
                                <th scope='row'>5</th>
                                <td>춘천닭갈비</td>
                                <td>서울시 강북구</td>
                                <td>한식</td>
                            </tr>
                            <tr>
                                <th scope='row'>6</th>
                                <td>더원</td>
                                <td>서울시 강서구</td>
                                <td>중식</td>
                            </tr>
                            <tr>
                                <th scope='row'>7</th>
                                <td>명문진사갈비..</td>
                                <td>서울시 구로구</td>
                                <td>한식</td>
                            </tr>
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
                <div className="searchContainer">
                    <Form.Select className="searchSelect">
                        <option>주소</option>
                        <option>식별번호</option>
                        <option>업소명</option>
                        <option>주소</option>
                        <option>편의성</option>
                        <option>음식 종류</option>
                    </Form.Select>
                    <InputGroup>
                        <Form.Control type="text" placeholder="검색어를 입력하세요" />
                        <Button variant="warning">
                            <FaSearch />
                        </Button>
                    </InputGroup>
                </div>
                <a className="addRestaurantContainer" href='/adminRestaurantCreate'>
                    <Button variant="warning">식당추가</Button>
                </a>
            </div>
        </AdminLayout>
    )
}

export default AdminRestaurant