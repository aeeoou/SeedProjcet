import UserLayout from '../UserLayout';
import MyBackButton from '../navigation/02';
import {Table} from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';

const pageName='내 문의'

const InquiryMyList = () => {
    const inquiries = [
        {author: 'user', title: '예약페이지가 뜨지않습니다.', date: '2024-08-04', views: 11, content:  `예약페이지가 뜨지않습니다.`},
    ]

    const {author} = useParams();
    const inquiry = inquiries.find(inquiry => inquiry.author === author);

    if(!inquiry) {
        return <div>Inquiry not found</div>;
    }

    return (
        <UserLayout>
            <MyBackButton pageName={pageName}/>
            <div className='text-center d-flex justify-content-center'>
                {inquiry.author}의 문의
            </div>
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

export default InquiryMyList