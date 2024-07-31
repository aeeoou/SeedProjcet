import AdminLayout from '../AdminLayout';
import {Row, Col, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


const AdminAdvertisementCreate = () => {
    return (
        <>
            {/* ADMIN header로 변경하기 */}
            <AdminLayout>
                <div>
                    <main>
                        <div classNamme='text-start'>
                        <div class="mb-2">
                            <input type="text"
                                    class="form-control"
                                    placeholder="식당명을 입력하세요."
                                    aria-label="Recipient's personalName"
                                    aria-describedby="button-addon2">
                            </input>
                        </div>
                            <div>2024-07-19 00:00:00</div>
                        </div>
                        <hr/>
                        <div className='border mb-4 p-4 d-flex align-items-center justify-content-center fs-3 fw-bold h-50' style={{ height: '150px' }}>
                            식당이미지
                        </div>
                        <Row className="justify-content-center mb-4">
                            <Col>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Control type="file" className="fileUploadButton" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="advertisement">
                            <Form.Control as="textarea" rows={10} placeholder="광고글을 작성하세요" />
                        </Form.Group>           
                        <div className='p-1 mt-1'>
                            이 게시물은 (주)맛있당에 관리 권한이 있음.
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Button
                                className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm'
                                href='/adminAdvertisement'
                                style={{ background: 'orange'}}>
                                등록
                            </Button>
                            <Link to='/adminAdvertisement' className='d-block'>
                                <a className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm' style={{ background: 'orange' }}>취소</a>
                            </Link>
                        </div>
                    </main>
                </div>
            {/* ADMIN footer로 변경하기 */}
            </AdminLayout>
        </>
    )
}

export default AdminAdvertisementCreate