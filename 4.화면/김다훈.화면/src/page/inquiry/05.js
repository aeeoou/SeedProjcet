import UserLayout from '../UserLayout';
import MyBackButton from '../navigation/02';
import {Form, Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const pageName='문의수정'

const InquiryUpdate = () => {
    const inquiries = [
        {author: 'user', title: '예약페이지가 뜨지않습니다.', date: '2024-08-04', views: 11, content: `예약페이지가 뜨지않습니다.`, answer: ''},
        {author: 'ekgns019', title: '예약 기록이 조회가 안 됩니다.', date: '2024-08-03', views: 14, content: 'Content for inquiry 2', answer: '일부 페이지는 시스템 점검중입니다. 조속히 해결하도록 하겠습니다.'},
        {author: 'java123', title: '회원 강퇴의 기준이 뭔가요?', date: '2024-08-02', views: 21, content: 'Content for inquiry 3', answer: ''},
        {author: 'react2', title: '식당 주소가 틀린 게 많아요.', date: '2024-08-01', views: 17, content: 'Content for inquiry 4', answer: ''}
    ]

    const {author} = useParams(); // Get the inquiry ID from the URL
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Find the inquiry by ID
        const inquiry = inquiries.find(inquiry => inquiry.author === author);
        if (inquiry) {
            setTitle(inquiry.title);
            setContent(inquiry.content);
        }
        setIsLoading(false);
    }, [author]);

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update the inquiry data
        console.log('Updated Inquiry:', { title, content });
        // Normally, you'd send this updated data to the server here
    };

    if(isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <UserLayout>
            <MyBackButton pageName={pageName}/>
            <Form className='mt-4' onSubmit={handleSubmit}>
                <div className='d-flex justify-content-start inquiryWriter'>
                    작성자: {author}
                </div>
                <hr style={{width: '100%'}}/>
                <Form.Control 
                        type='text'  
                        value={title} 
                        onChange={handleTitleChange}/>
                <hr style={{width: '100%'}}/>
                <Form.Group className='mb-3' controlId='inquiryContent'>
                    <Form.Label className='d-flex justify-content-start fw-bold'>
                        내용
                    </Form.Label>
                    <Form.Control 
                                as='textarea' 
                                rows={10} 
                                value={content} 
                                onChange={handleContentChange}/>
                </Form.Group>
                <div className='d-flex justify-content-end mb-2'>
                    <a href='/inquiryList'>
                        <Button variant='warning' className='inquiryListBtn me-2'>등록</Button>
                    </a>
                    <a href='/inquiryList'>
                        <Button variant='warning' className='inquiryUpdateBtn d-flex'>취소</Button>
                    </a>
                </div>
            </Form>
        </UserLayout>
    )
}

export default InquiryUpdate