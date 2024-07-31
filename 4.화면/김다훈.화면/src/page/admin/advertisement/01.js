import AdminLayout from '../AdminLayout';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const AdminAdList = () => {
    const [advertisements, setAdvertisements] = useState([]);
    const [searchType, setSearchType] = useState('선택');
    const [searchQuery, setSearchQuery] = useState('');

    // 광고 목록을 가져오는 함수
    const fetchAdvertisements = async () => {
        try {
            const response = await axios.get('http://localhost:8000/advertisement/list');
            setAdvertisements(response.data);
        } catch (error) {
            console.error('Error fetching advertisements', error);
        }
    };

    // 검색 함수
    const searchAdvertisements = async () => {
        try {
            const response = await axios.get('http://localhost:8000/advertisement/search', {
                params: {
                    type: searchType,
                    query: searchQuery
                }
            });
            setAdvertisements(response.data);
        } catch (error) {
            console.error('Error searching advertisements', error);
        }
    };

    // 컴포넌트가 마운트될 때 광고 목록을 가져옴
    useEffect(() => {
        fetchAdvertisements();
    }, []);

    return (
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
                            <tr key={advertisement.advertisementNo}>
                                <td>
                                    <Link to={`/adminAdvertisementUpdate/${advertisement.advertisementNo}`}
                                          style={{textDecoration: 'none', color: 'inherit'}}>
                                        {advertisement.advertisementNo}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/adminAdvertisementUpdate/${advertisement.advertisementNo}`}
                                          style={{textDecoration: 'none', color: 'inherit'}}>
                                        {advertisement.restaurantName}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/adminAdvertisementUpdate/${advertisement.advertisementNo}`}
                                          style={{textDecoration: 'none', color: 'inherit'}}>
                                        {new Date(advertisement.createDate).toLocaleDateString()}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <nav aria-label="Page navigation example" className='d-flex justify-content-center p-4'>
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className='searchContainer'>
                    <Form.Select className="searchSelect" value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                        <option>선택</option>
                        <option>식별번호</option>
                        <option>식당명</option>
                        <option>작성일</option>
                    </Form.Select>
                    <InputGroup>
                        <Form.Control type="text" placeholder="검색어를 입력하세요" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        <Button variant="outline-secondary" onClick={searchAdvertisements}>
                            <FaSearch />
                        </Button>
                    </InputGroup>
                </div>
                <div className='d-flex justify-content-end mb-5'>
                    <Link to='/adminAdvertisementCreate' className='btn btn-primary btn-outline-warning p-2 btn-sm' style={{background: 'orange'}}>
                        광고 작성
                    </Link>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminAdList;