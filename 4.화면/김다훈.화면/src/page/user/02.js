import {Row, Col, Form} from 'react-bootstrap'
import { useState } from 'react';
import UserLayout from '../UserLayout';
import MyBackButton from "../navigation/02";
import UserCheckModal from './UserCheckModal';

const UserSignUp = () => {
    const [user, setUser] = userState({

    })

    const [idValue, setId] = useState('');



    const saveUserId = event => {
        setId(event.target.value);
    };

    return (
        <UserLayout>
            <MyBackButton pageName={'회원가입'}/>
            <Row className='mt-5'>
                <Col className='d-flex align-items-center justify-content-center' xs={3}>
                    <div>*아이디</div>
                </Col>
                <Col className='d-flex align-items-center justify-content-center' xs={6}>
                    <Form.Control type="text" placeholder="아이디를 입력하세요." onChange={saveUserId} value={idValue}/>
                </Col>
                <Col className='d-flex align-items-center justify-content-center' xs={3}>
                    <UserCheckModal btnName={'중복확인'} btnWidth={'w-100'} modalBody={'사용가능한 아이디입니다.'} />
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col className='d-flex align-items-center justify-content-center' xs={3}>
                    <div>*비밀번호</div>
                </Col>
                <Col className='d-flex align-items-center justify-content-center' xs={6}>
                    <Form.Control type="password" placeholder="비밀번호를 입력하세요." className='w-100'/>
                </Col>
                <Col xs={3}>
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col className='d-flex align-items-center justify-content-center' xs={3}>
                    <div className='text-center'>*비밀번호<br/>확인</div>
                </Col>
                <Col className='d-flex align-items-center justify-content-center' xs={6}>
                    <Form.Control type="password" placeholder="비밀번호를 입력하세요." className='w-100'/>
                </Col>
                <Col xs={3}>
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col className='d-flex align-items-center justify-content-center' xs={3}>
                    <div className='text-center'>*이메일</div>
                </Col>
                <Col className='d-flex align-items-center justify-content-center' xs={6}>
                    <Form.Control type="text" placeholder="이메일을 입력하세요."   className='w-100'/>
                </Col>
                <Col xs={3}>
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col className='d-flex align-items-center justify-content-center' xs={3}>
                    <div className='text-center'>*휴대폰번호</div>
                </Col>
                <Col className='d-flex align-items-center justify-content-center' xs={6}>
                    <Form.Control type="text" placeholder="휴대폰번호를 입력하세요." className='w-100'/>
                </Col>
                <Col xs={3}>
                    <UserCheckModal btnName={'인증'} btnWidth={'w-100'} modalBody={'인증번호가 발송되었습니다.'}/>
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col className='d-flex align-items-center justify-content-center' xs={3}>
                    <div className='text-center'>*인증번호</div>
                </Col>
                <Col className='d-flex align-items-center justify-content-center' xs={6}>
                    <Form.Control type="text" placeholder="인증번호를 입력하세요." className='w-100'/>
                </Col>
                <Col xs={3}>
                    <UserCheckModal btnName={'확인'} btnWidth={'w-100'} modalBody={'확인되었습니다.'}/>
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col className='d-flex align-items-center justify-content-center' xs={3}>
                    <div className='text-center'>*이름</div>
                </Col>
                <Col className='d-flex align-items-center justify-content-center' xs={6}>
                    <Form.Control type="text" placeholder="이름을 입력하세요." className='w-100' />
                </Col>
                <Col xs={3}>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col className='d-flex align-items-center justify-content-center' xs={3}>
                    <div className='text-center'>*생년월일</div>
                </Col>
                <Col className='d-flex align-items-center justify-content-center' xs={6}>
                    <Form.Control type="text" placeholder="생년월일을 입력하세요." className='w-100'/>
                </Col>
                <Col xs={3}>
                </Col>
            </Row>
            <Row>
                <Col className='text-center mt-3'>
                    *은 필수입력 사항입니다.
                </Col>
            </Row>
            <Row>
                <Col className='text-center mt-3'>
                    <UserCheckModal btnName={'회원가입'} modalBody={'회원가입이 완료되었습니다.'} completeBtn='/userCompleteSignUp'/>
                </Col>
            </Row>
        </UserLayout>
    )
}

export default UserSignUp