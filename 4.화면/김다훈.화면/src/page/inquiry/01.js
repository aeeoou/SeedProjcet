import UserLayout from '../UserLayout';
import MyBackButton from '../navigation/02';
import {Link} from 'react-router-dom';
import {Button, Table, Row, Col} from 'react-bootstrap';

const InquiryList = () => {
    const inquiries = [
        {author: 'user', title: '예약페이지가 뜨지않습니다.', date: '2024-08-04', views: 11, content: 'Content for inquiry 1', },
        {author: 'ekgns019', title: '예약 기록이 조회가 안 됩니다.', date: '2024-08-03', views: 14, content: 'Content for inquiry 2'},
        {author: 'java123', title: '회원 강퇴의 기준이 뭔가요?', date: '2024-08-02', views: 21, content: 'Content for inquiry 3'},
        {author: 'react2', title: '식당 주소가 틀린 게 많아요.', date: '2024-08-01', views: 17, content: 'Content for inquiry 4'},
    ]

    const pageName='문의목록조회'
    
    return (
        <UserLayout>
            <MyBackButton pageName={pageName}/>
            <Row>
                <Col className='mt-3'>
                    <p className='inquiryTitle'>문의</p>
                </Col>
                <Col className='mt-3 d-flex align-items-center justify-content-end'>
                    <a href='/inquiryCreate'>
                        <Button variant='warning me-3'>문의등록</Button>
                    </a>
                    <a href='/inquiryMyList/user'>
                        <Button variant='warning'>내 문의</Button>
                    </a>
                </Col>
            </Row>
            <Table border border-0 className='mt-3'>
                <thead>
                    <tr className='border-dark'>
                        <th className='text-center'>작성자</th>
                        <th className='text-center'>제목</th>
                        <th className='text-center'>등록일</th>
                        <th className='text-center'>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {inquiries.map((inquiry, index) => (
                        <tr key={index} className='border-start border-end border-dark'>
                            <td className='text-center' style={{height: '4rem'}}>{inquiry.author}</td>
                            <td className='text-center' style={{height: '4rem'}}><Link className='link-dark' to={`/inquiryRead/${inquiry.author}`}>{inquiry.title}</Link></td>
                            <td className='text-center' style={{height: '4rem'}}>{inquiry.date}</td>
                            <td className='text-center' style={{height: '4rem'}}>{inquiry.views}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
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
        </UserLayout>
    )
}

export default InquiryList