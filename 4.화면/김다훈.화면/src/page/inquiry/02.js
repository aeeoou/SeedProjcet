import UserLayout from '../UserLayout';
import {Form, Button} from 'react-bootstrap';
import MyBackButton from '../navigation/02';

const InquiryCreate = () => {
    return (
        <UserLayout>
            <MyBackButton pageName={'문의추가'}/>
            <div className='d-flex justify-content-start inquiryWriter'>
                작성자: user
            </div>
            <hr style={{width: '100%'}}/>
            <Form.Control type='text' name='title' placeholder='제목을 입력하세요'/>
            <hr style={{width: '100%'}}/>
            <Form.Group className='mb-3' controlId='inquiryContent'>
                <Form.Control className='writingContent' as='textarea' rows={15} placeholder='문의를 입력하세요'/>
            </Form.Group>
            <div className='d-flex justify-content-end mb-2'>
                <a href='/inquiryList'>
                    <Button variant='warning' className='inquiryListBtn me-2'>취소</Button>
                </a>
                <a href='/inquiryList'>
                    <Button variant='warning' className='inquiryCreateBtn d-flex'>등록</Button>
                </a>
            </div>
        </UserLayout>
    )
}

export default InquiryCreate