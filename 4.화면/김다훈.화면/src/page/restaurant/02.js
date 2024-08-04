import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UserLayout from '../UserLayout'; 
import MyBackButton from '../navigation/02';

const RestaurantDetail = () => {
  return (
    <UserLayout>
      <MyBackButton pageName={'식당 조회'}/>
      <Container>
        <Row className="mb-4">
          <Col>
            <div className="restaurantImage">
              <div className="restaurantImageContent">
                <div>식당이미지</div>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <h2>명륜진사갈비 성남점</h2>
            <p>대표메뉴: 갈비</p>
            <p>영업시간: 오전 9:00 ~ 오후 9:00</p>
            <p>가격: 16,900원</p>
            <p>
              소개: 숯불을 원하는만큼 새롭게 갈아드립니다.!<br />
              고기의 품질이 무한리필가게중에 제일 좋다고 자부합니다.<br />
              손님이 드시는 음식을 제 자녀가 먹는다는 마음으로 준비합니다.
            </p>
            <div className="textEnd mb-5">
              <Button className="reservationBtn" href='/reservationCreate'>
                예약하기
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </UserLayout>
  );
};

export default RestaurantDetail;