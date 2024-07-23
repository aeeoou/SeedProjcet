import { Link } from 'react-router-dom';
import {ChevronRight} from 'react-bootstrap-icons';
import AdminLayout from '../AdminLayout';
import {Row, Col} from 'react-bootstrap'

const inquiries = [
    {author: 'user', title: '예약페이지가 뜨지않습니다.', date: '2024-08-04', views: 11, content: 'Content for inquiry 1', answer: '시스템이 구축된 것부터 다시 한 번 확인하겠습니다.'},
    {author: 'ekgns019', title: '예약 기록이 조회가 안 됩니다.', date: '2024-08-03', views: 14, content: 'Content for inquiry 2', answer: '앱을 다시 실행해 보세요.'},
    {author: 'java123', title: '회원 강퇴의 기준이 뭔가요?', date: '2024-08-02', views: 21, content: 'Content for inquiry 3', answer: null},
    {author: 'react2', title: '식당 주소가 틀린 게 많아요.', date: '2024-08-01', views: 17, content: 'Content for inquiry 4', answer:'식당 주소를 수정하도록 하겠습니다.'}
]

const AdminAnswer = () => {
    return (    
        <AdminLayout>
            <div className='border border-dark row'>
                <div classNamme='text-start'>
                    <h5 className='mt-5 fw-bold mx-1'>문의</h5>
                </div>
                <Row className='mx-1'>
                    <Col>
                        <Row>
                            <Col xs={2} className='d-flex align-items-center justify-content-center'>작성자</Col>
                            <Col xs={5} className='d-flex align-items-center justify-content-center'>제목</Col>
                            <Col xs={2} className='d-flex align-items-center justify-content-center w-25'>등록일</Col>
                            <Col xs={2} className='d-flex align-items-center justify-content-center'>조회수</Col>
                        </Row>

                        {inquiries.map((inquiry, index) => (
                            <div className='adminAnswerCss'>
                                <Row key={index} className='border border-dark'>
                                    <Col xs={2} className='d-flex align-items-center justify-content-center' style={{height: '4rem'}}>{inquiry.author}</Col>
                                    <Col xs={5} className='d-flex align-items-center justify-content-center' style={{height: '4rem'}}>{inquiry.title}</Col>
                                    <Col xs={2} className='d-flex align-items-center justify-content-center w-25' style={{height: '4rem'}}>{inquiry.date}</Col>
                                    <Col xs={2} className='d-flex align-items-center justify-content-center' style={{height: '4rem'}}>{inquiry.views}</Col>
                                </Row>
                                
                                <Row className='ms-2 mt-3'>
                                    <Col>
                                        RE: {inquiry.answer}
                                        {inquiry.answer ? 
                                        (<Link to={`/adminFixAnswer/${inquiry.author}`}>
                                            <ChevronRight className='d-flex align-items-center justify-content-center float-end'/>
                                        </Link>):
                                        (<Link to={`/adminAnswerCreate/${inquiry.author}`}>
                                            <ChevronRight className='d-flex align-items-center justify-content-center float-end'/>
                                        </Link>)}
                                        
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </Col>
                </Row>

   
                {/* 부트스트랩 페이지네이션 (비동기처리 해야함)*/}
                <nav aria-label="Page navigation example" className='d-flex justify-content-center'>
                    <ul class="pagination" id='paging'>
                        <li class="page-item" id='paging'>
                            <a class="page-link" href="#" aria-label="Previous" id='paging'>
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" id='paging' href="#">1</a></li>
                        <li class="page-item"><a class="page-link" id='paging' href="#">2</a></li>
                        <li class="page-item"><a class="page-link" id='paging' href="#">3</a></li>
                        <li class="page-item"><a class="page-link" id='paging' href="#">4</a></li>
                        <li class="page-item"><a class="page-link" id='paging' href="#">5</a></li>
                        <li class="page-item" id='paging'>
                            <a class="page-link" href="#" aria-label="Next" id='paging'>
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="mb-5 d-flex justify-content-end">
                    <div className="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label class="form-check-label" for="flexCheckDefault">
                            답변없는 게시글만 보기
                        </label>
                    </div>
                </div>        
            </div>
        </AdminLayout>
    )
}

export default AdminAnswer