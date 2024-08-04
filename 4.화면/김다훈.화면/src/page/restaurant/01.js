import UserLayout from '../UserLayout'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import MyBackButton from '../navigation/02'
const RestaurantList = () => {
    return(
        <UserLayout>
            <MyBackButton pageName={'식당 목록'}/>
            <Link to={'/restaurantDetail'} id='deleteLinkCss'>
                <Row>
                    <Col>
                        <div className='restaurantImg'>식당이미지</div>
                    </Col>
                    <Col>
                        <div className='restaurantImg'>식당이미지</div>
                    </Col>
                </Row>
            </Link>
            <Row>
                <Col>
                    <div className='restaurantName'>시골밥상</div>
                </Col>
                <Col>
                    <div className='restaurantName'>명륜진사갈비 성남점 </div>
                </Col>
            </Row>
            <Link to={'/restaurantDetail'} id='deleteLinkCss'>
                <Row>
                    <Col>
                        <div className='restaurantImg'>식당이미지</div>
                    </Col>
                    <Col>
                        <div className='restaurantImg'>식당이미지</div>
                    </Col>
                </Row>
            </Link>
            <Row>
                <Col>
                    <div className='restaurantName'>김삼보</div>
                </Col>
                <Col>
                    <div className='restaurantName'>한강</div>
                </Col>
            </Row>
            <nav aria-label="Page navigation example" className='d-flex justify-content-center p-4' >
                <ul class="pagination" id='paging'>
                    <li class="page-item" id='paging' >
                        <a class="page-link" aria-label="Previous" id='paging'>
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item" ><a class="page-link" href="#" id='paging'>1</a></li>
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

export default RestaurantList