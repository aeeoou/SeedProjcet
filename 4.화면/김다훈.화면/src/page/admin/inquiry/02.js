import AdminLayout from '../AdminLayout';
import React, { useState } from 'react';
import { Button, Col, Row, Breadcrumb, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import InquiryCheckModal from './InquiryCheckModal';
import { useParams } from 'react-router-dom';

const inquiries = [
    {author: 'user', title: '예약페이지가 뜨지않습니다.', date: '2024-08-04', views: 11, content: `예약페이지를 들어갔는데 뜨지를 않아요`, answer: '시스템이 구축된 것부터 다시 한 번 확인하겠습니다.'},
    {author: 'ekgns019', title: '예약 기록이 조회가 안 됩니다.', date: '2024-08-03', views: 14, content: 'Content for inquiry 2', answer: '일부 페이지는 시스템 점검중입니다. 조속히 해결하도록 하겠습니다.'},
    {author: 'java123', title: '회원 강퇴의 기준이 뭔가요?', date: '2024-08-02', views: 21, content: '제가 갑자기 회원강퇴를 당했는데 이유를 알고 싶어요.', answer: ''},
    {author: 'react2', title: '식당 주소가 틀린 게 많아요.', date: '2024-08-01', views: 17, content: 'Content for inquiry 4', answer: ''}
]

const AdminAnswerCreate = () => {

    const {author} = useParams();
    const inquiry = inquiries.find(inquiry => inquiry.author === author);

    return (
        <AdminLayout>          
            <Row className='border border-dark mx-2 my-5' style={{height:'35rem'}}>
                <Col className='mx-5 mt-3'>
                    <Row>
                        <Breadcrumb className='fw-bold'>
                            <Breadcrumb.Item href="#" className='w-15 '><p id="deleteLinkCss">답변목록</p></Breadcrumb.Item>
                            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" className='w-50'>
                                <p id="deleteLinkCss">답변추가</p>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row>
                        문의제목
                    </Row>
                    <Row>
                        {inquiry.title}
                    </Row>
                    
                    <Row className=''>
                        <hr/>
                        문의글
                    </Row>
                    <Row>
                        {inquiry.content}
                    </Row>
                    <Row>
                        <Form className='p-0'>
                            <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>답변</Form.Label>
                                <Form.Control as="textarea" rows={3}/>
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row className='mt-4'>
                        <Col>
                            <Button variant="warning" className='w-25 float-end ms-3'  href="/adminAnswer">취소</Button>
                            <Button variant="warning" className='w-25 float-end ms-3' href="/adminAnswer">등록</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </AdminLayout>    
    )
}

export default AdminAnswerCreate