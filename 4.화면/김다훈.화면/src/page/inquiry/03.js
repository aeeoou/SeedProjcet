import UserLayout from '../UserLayout';
import MyBackButton from '../navigation/02';
import {Button} from 'react-bootstrap';
import DeleteBtn from '../inquiry/DeleteBtn';
import UpdateErrorModal from '../inquiry/UpdateErrorModal';
import DeleteErrorModal from '../inquiry/DeleteErrorModal';
import {useParams, Link} from 'react-router-dom';

const inquiries = [
    {author: 'user', title: '예약페이지가 뜨지않습니다.', date: '2024-08-04', views: 11, content: `예약페이지가 뜨지않습니다.`, answer: ''},
    {author: 'ekgns019', title: '예약 기록이 조회가 안 됩니다.', date: '2024-08-03', views: 14, content: 'Content for inquiry 2', answer: '일부 페이지는 시스템 점검중입니다. 조속히 해결하도록 하겠습니다.'},
    {author: 'java123', title: '회원 강퇴의 기준이 뭔가요?', date: '2024-08-02', views: 21, content: 'Content for inquiry 3', answer: ''},
    {author: 'react2', title: '식당 주소가 틀린 게 많아요.', date: '2024-08-01', views: 17, content: 'Content for inquiry 4', answer: ''}
]



const pageName='문의조회'

const InquiryRead = () => {
    const {author} = useParams();
    const inquiry = inquiries.find(inquiry => inquiry.author === author);

    if(!inquiry) {
        return <div>Inquiry not found</div>;
    }

    return (
        <UserLayout>
            <MyBackButton pageName={pageName}/>
            <div className='d-flex justify-content-start inquiryWriter mt-4'>
                작성자: {inquiry.author}
            </div>
            <hr style={{width: '100%'}}/>
            <div className='inquiryTitle fw-bold'>
                {inquiry.title}
            </div>
            <hr className='d-flex justify-content-start inquiryWriter'/>
            <pre className='inquiryContent fw-bold'>
                {inquiry.content}
            </pre>
            <div className='d-flex justify-content-end mb-2 mt-5'>
                {!inquiry.answer ? 
                <Link to={`/inquiryUpdate/${inquiry.author}`}>
                    <Button variant='warning' className='inquiryUpdateBtn d-flex me-2'>수정</Button>
                </Link> : <UpdateErrorModal/>}
                {!inquiry.answer ?
                <DeleteBtn/> : <DeleteErrorModal/>}
                <a href='/inquiryList'>
                    <Button variant='warning' className='inquiryListBtn me-2'>취소</Button>
                </a>
            </div>
        </UserLayout>
    )
}

export default InquiryRead